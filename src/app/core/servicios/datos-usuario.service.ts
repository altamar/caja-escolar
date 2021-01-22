import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TokenService } from './token.service';
import { HttpHeaders, HttpBackend, HttpClient } from '@angular/common/http';
import { ENV } from '../../../environments/environment';
import {InMemoryKeys} from '../storage/in-memory-key';
import {ApInMemoryProvider} from '../storage/ap-in-memory/ap-in-memory';
import {OptionsModal, TypeModal} from "../../models/modal.options";
import {ModalService} from "./modal.service";
import { GetBeneficiosService  } from './get-beneficios.service';

@Injectable({
    providedIn: 'root'
})
export class DatosUsuarioService {
    private httpWithoutInterceptor: HttpClient;
    private sebjectDatosUsuario = new Subject<any>();
    private OptionsMLoad = new OptionsModal(TypeModal.load , false);
    public datosUsuario$ = this.sebjectDatosUsuario.asObservable();


    constructor(  private httpBackend: HttpBackend, private tokenService:TokenService ,
                  private apInMemoryProvider: ApInMemoryProvider,
                  private getBeneficios: GetBeneficiosService,
                  private _modalService:ModalService) {this.httpWithoutInterceptor = new HttpClient(httpBackend) }

    loadData(crud:string){

        this.tokenService.getToken().subscribe();
        this.tokenService.getTokenPortabilidad().subscribe(( Response )=> this.consultarRut(crud,Response.access_token));
    }


    consultarRut(crud:string , token:string){
        const   data ={cifrado:crud};
        const headerDes = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Content-Type', 'application/json');
      this._modalService.open('loadmodal' , this.OptionsMLoad);
      this.httpWithoutInterceptor.post<any>(ENV.API_URL_Portabilidad+ '/CLA_Personas_ZeroQDecrypt-v1_0_EXP/Proxies/PX_ZeroQDecryptExpSOAP12',
        data ,
        { headers: headerDes
        }
      ).subscribe((response)=>{

          let arrayparameters=    response.descifrado.split("-");
          this.httpWithoutInterceptor.get<any>(ENV.API_URL+ `/beneficiarios/${arrayparameters[0]}/campanas/2`,

            { headers: new HttpHeaders()
                .set('Authorization',`Bearer ${token}`)
                .set('Content-Type', 'application/json')
                .set('x-canal', '3')
            }
          ).subscribe((resp)=>{
              this.apInMemoryProvider.setItemByKey(InMemoryKeys.RUT,arrayparameters[0]);
              this.apInMemoryProvider.setItemByKey(InMemoryKeys.DigitoVerificacion, arrayparameters[1] ?  arrayparameters[1] : null);
              this.sebjectDatosUsuario.next(resp);
              this._modalService.close('loadmodal');
            },
            (error) => {
              this._modalService.close('loadmodal');
              console.log(error)
            });

        },
        (error) => {
          this._modalService.close('loadmodal');
          console.log(error)
        });

        this.getBeneficios.get(`/campanas/2/convenios`,

            { headers: new HttpHeaders()
              .set('Authorization', `Bearer ${token}`)
              .set('Content-type', 'application/json')
              .set('usuario', 'cla@cajalosandes.cl')
              .set('clave', 'JxSvqeFWCCpjTuD')
            }
          )


    }


    getdada(){

        return  { rut:   this.apInMemoryProvider.getItemByKey(InMemoryKeys.RUT)}
    }



}
