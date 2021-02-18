import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApHttpClient } from './Ap-http-client';
@Injectable({
  providedIn: 'root'
})
export class GetBeneficiosService {

  private sebjectEspecials = new Subject<any>();
  public beneficios$ = this.sebjectEspecials.asObservable();

  constructor(
    private apHttpClient: ApHttpClient,
  ) { }

  get(resource: string, headerOps: any){
    this.apHttpClient.getcustonheader<any>(resource, headerOps).subscribe((resp) => {
      this.sebjectEspecials.next(resp)
    },
    (error) => {
      console.log(error)
    });

  }

  getEspecials(){
    this.beneficios$.subscribe((res)=>{
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


}
