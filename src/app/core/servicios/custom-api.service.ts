import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OptionsModal, TypeModal } from 'src/app/models/modal.options';
import { ModalService } from './modal.service';
import { GetBeneficiosService  } from './get-beneficios.service';
import { ENV } from 'src/environments/environment';
import { ApInMemoryProvider } from '../storage/ap-in-memory/ap-in-memory';
import { InMemoryKeys } from '../storage/in-memory-key';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CustomApiService {

  // URL_API = 'http://localhost:4000/api' //Esto deberia estar en el ENV por temas de seguridad
  private httpWithoutInterceptor : HttpClient;
  private sebjectDatosUsuarioCustom = new Subject<any>();
  private OptionsMLoad = new OptionsModal(TypeModal.load , false);
  public datosUsuarioCustom$ = this.sebjectDatosUsuarioCustom.asObservable();



  private sebjectDatosConvenioCustom = new Subject<any>();
  public datosConvenioCustom$ = this.sebjectDatosConvenioCustom.asObservable();

  constructor(
    private httpBackend: HttpBackend,
    private _modalService:ModalService,
    private getBeneficios: GetBeneficiosService,
    private apInMemoryProvider: ApInMemoryProvider
    ) { this.httpWithoutInterceptor = new HttpClient(httpBackend)}


  loadData(crut: string){
    this.getToken().subscribe((response) => this.consultarRut(crut, response.token))
  }

  getToken(){
    const body = {
      'username': 'caja',
      'password': 'password',
      'apikey': 'BskA66wmLkJB1yF2MiMl'
    }
    return this.httpWithoutInterceptor.post<any>(ENV.API_URL_CUSTOM+ `/token`, body,
      { headers: new HttpHeaders()
          .set('apikey', 'BskA66wmLkJB1yF2MiMl')
      }
    ).pipe(
        tap(value => this.apInMemoryProvider.setItemByKey(InMemoryKeys.AccesToken ,value.token))
    );
  }

  consultarRut(crud: string, token: string){
    const data = {cifrado:crud}
    const headerss = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Content-Type', 'application/json');
    this._modalService.open('loadmodal', this.OptionsMLoad);
    this.httpWithoutInterceptor.post<any>(ENV.API_URL_CUSTOM+`/cifrado`,
      data,
      {
        headers: headerss
      }
    ).subscribe((response) => {
      let arrayparameters = response.descifrado.split("-");
      this.httpWithoutInterceptor.get<any>(ENV.API_URL_CUSTOM+`/beneficiario/${arrayparameters[0]}`,
        {
          headers: headerss
        }
      ).subscribe((resp) => {
        this.apInMemoryProvider.setItemByKey(InMemoryKeys.RUT,arrayparameters[0]);
        this.apInMemoryProvider.setItemByKey(InMemoryKeys.DigitoVerificacion, arrayparameters[1] ?  arrayparameters[1] : null);
        this.sebjectDatosUsuarioCustom.next(resp)
          this.httpWithoutInterceptor
            .get<any>(ENV.API_URL_CUSTOM + `/convenio`, {
              headers: headerss,
            })
            .subscribe((response) => {
              this.sebjectDatosConvenioCustom.next(response);
              this._modalService.close('loadmodal');
            });
      },
      (error) => {
        this._modalService.close('loadmodal');
        console.log(error)
      });
    })
  }

  getEspecials(){
    this.datosConvenioCustom$.subscribe((res)=>{
      res?.result.forEach((comercio) => {
        comercio.beneficiosCopago = this.filtroEspecial(comercio, '1');
        comercio.beneficiosDescuento = this.filtroEspecial(comercio, '2');
        // if (comercio.beneficios.length > 0) {
        //   data.push(comercio);
        // }
      });
    },
    (error) => {
      console.log(error)
    })
  }

  filtroEspecial(comercio: any, tipo: string){
    return (comercio.beneficios || []).filter(
      (e) => e.beneficioespecial == tipo
    );
  }


  getConvenio(data: any): Observable<any>{
    const token = this.apInMemoryProvider.getItemByKey(InMemoryKeys.AccesToken)
    const headerss = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Content-Type', 'application/json');
    return this.httpWithoutInterceptor.get<any>(ENV.API_URL_CUSTOM + `/convenio/${data}`,
      {
        headers: headerss
      }
    )
  }


  // getTokenOld(crut: string){

  //   const body = {
  //     'username': 'caja',
  //     'password': 'password',
  //     'apikey': 'BskA66wmLkJB1yF2MiMl'
  //   }

  //   this.httpWithoutInterceptor.post<any>(this.URL_API+ `/token`, body).subscribe((response) => {
  //     console.log(response)
  //     const headerss = new HttpHeaders()
  //       .set('authorization',`Bearer ${response.token}`)

  //       //Get datos usuario (cargas)
  //     this.httpWithoutInterceptor.get<any>(this.URL_API+`/beneficiario/${crut}`,
  //         {
  //           headers: headerss
  //         }
  //       ).subscribe((response) => {
  //         this.sebjectDatosUsuarioCustom.next(response)
  //       })

  //       //Get datos convenio (beneficios)
  //     this.httpWithoutInterceptor.get<any>(this.URL_API+`/convenio`,
  //       {
  //         headers: headerss
  //       }
  //     ).subscribe((response) => {
  //       this.sebjectDatosConvenioCustom.next(response)
  //     })

  //   })
  // }

}
