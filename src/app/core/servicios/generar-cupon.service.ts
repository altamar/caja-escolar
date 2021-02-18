import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ENV } from 'src/environments/environment';
import { ApInMemoryProvider } from '../storage/ap-in-memory/ap-in-memory';
import { InMemoryKeys } from '../storage/in-memory-key';
import { ApHttpClient } from './Ap-http-client';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class GenerarCuponService {
  private httpWithoutInterceptor : HttpClient;
  private sebjectCupon = new Subject<any>();
  public cupon$ = this.sebjectCupon.asObservable();


  constructor(
    private apInMemoryProvider: ApInMemoryProvider,
    private httpBackend: HttpBackend
  ) { this.httpWithoutInterceptor = new HttpClient(httpBackend)}



  generar(data: any){
    const {cargaData, beneficioData, comercioData} = data
    const token = this.apInMemoryProvider.getItemByKey(InMemoryKeys.AccesToken)
    const rutAfiliado = this.apInMemoryProvider.getItemByKey(InMemoryKeys.RUT) + this.apInMemoryProvider.getItemByKey(InMemoryKeys.DigitoVerificacion)
    console.log(rutAfiliado)

    const headerss = new HttpHeaders()
        .set('Authorization',`Bearer ${token}`)
        .set('Content-Type', 'application/json');

    const dataBody = {
      rutAfiliado: rutAfiliado,
      codigoCampana: comercioData.codigoCampana,
      montoCopago: 'porponer',
      rutCarga: cargaData.rutCarga,
      tipo: beneficioData.beneficioespecial,
      nombreComercio: comercioData.nombreComercio,
      idbeneficio: beneficioData.idbeneficio
    }

    // "rutAfiliado": "87945642",
    // "codigoDeCanal": 1,
    // "codigoCampana": 2,
    // "montoCopago": 6000,
    // "rutCarga": "220105717",
    // "tipo": "1",
    // "nombreComercio": "Nombre Comercio 1",
    // "idBeneficio": 71

    this.httpWithoutInterceptor.post<any>(ENV.API_URL_CUSTOM+`cupon/generar`,
      dataBody,
      {
        headers: headerss
      }
    )


    console.log(cargaData, beneficioData, comercioData)
  }

}
