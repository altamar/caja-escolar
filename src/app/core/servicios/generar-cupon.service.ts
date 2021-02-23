import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OptionsModal, TypeModal } from 'src/app/models/modal.options';
import { ENV } from 'src/environments/environment';
import { ApInMemoryProvider } from '../storage/ap-in-memory/ap-in-memory';
import { InMemoryKeys } from '../storage/in-memory-key';
import { ApHttpClient } from './Ap-http-client';
import { ModalService } from './modal.service';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class GenerarCuponService {
  private httpWithoutInterceptor : HttpClient;
  private sebjectCupon = new Subject<any>();
  public cupon$ = this.sebjectCupon.asObservable();
  private OptionsMLoad = new OptionsModal(TypeModal.load , false);

  constructor(
    private apInMemoryProvider: ApInMemoryProvider,
    private httpBackend: HttpBackend,
    private modalService: ModalService
  ) { this.httpWithoutInterceptor = new HttpClient(httpBackend)}



  generar(data: any){
    const {cargaData, beneficioData, comercioData} = data
    const token = this.apInMemoryProvider.getItemByKey(InMemoryKeys.AccesToken)
    const rutAfiliado = this.apInMemoryProvider.getItemByKey(InMemoryKeys.RUT) + this.apInMemoryProvider.getItemByKey(InMemoryKeys.DigitoVerificacion)
    //console.log(rutAfiliado)
    this.modalService.open('loadmodal' , this.OptionsMLoad);
    const headerss = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Content-Type', 'application/json');

    const dataBody = {
      rutAfiliado: rutAfiliado,
      codigoCampana: comercioData.idcampana,
      montoCopago: cargaData.montoCupon,
      rutCarga: cargaData.cargaRut,
      tipo: beneficioData.beneficioespecial,
      nombreComercio: comercioData.marca,
      idbeneficio: beneficioData.idbeneficio,
      idconvenio: comercioData.idconvenio,
    }

    this.httpWithoutInterceptor.post<any>(ENV.API_URL_CUSTOM+`/cupon/generate`,
      dataBody,
      {
        headers: headerss
      }
    ).subscribe((response) => {
      this.modalService.close('loadmodal');
    },
    (error) => {
      console.log(error)
    })

  }


  getCupon(data: any) : Observable<any>{
    return this.httpWithoutInterceptor.get<any>(ENV.API_URL_CUSTOM+`/cupon/${data}`)
  }

  getOne(data: any){
    this.modalService.open('loadmodal' , this.OptionsMLoad);
    this.httpWithoutInterceptor.get<any>(ENV.API_URL_CUSTOM+`/cupon/${data}`
    ).subscribe((data) => {
      this.sebjectCupon.next(data)
      this.modalService.close('loadmodal');
    },
    (error) => {
      console.log(error)
    })
  }

}
