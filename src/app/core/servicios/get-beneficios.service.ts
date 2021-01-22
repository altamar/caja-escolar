import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ApHttpClient } from './Ap-http-client';
@Injectable({
  providedIn: 'root'
})
export class GetBeneficiosService {

  private sebjectBeneficios = new Subject<any>();
  public beneficios$ = this.sebjectBeneficios.asObservable();

  constructor(
    private apHttpClient: ApHttpClient,
  ) { }


  get(resource: string, headerOps: any){
    this.apHttpClient.getcustonheader<any>(resource, headerOps).subscribe((resp) => {
      this.sebjectBeneficios.next(resp)
    },
    (error) => {
      console.log(error)
    });

  }



  // getEspecial1(data: any){
  //   this.beneficios$.subscribe((res)=>{
  //     res?.result.forEach((comercio) => {
  //       comercio.beneficios = (comercio.beneficios || []).filter(
  //         (e) => e.beneficioespecial == '1'
  //       );
  //       if (comercio.beneficios.length > 0) {
  //         data.push(comercio);
  //       }
  //     });
  //   },
  //   (error) => {
  //     console.log(error)
  //   })

  // }



  // getEspecial2(data: any){
  //   this.beneficios$.subscribe((res)=>{
  //     res?.result.forEach((comercio) => {
  //       comercio.beneficios = (comercio.beneficios || []).filter(
  //         (e) => e.beneficioespecial == '2'
  //       );
  //       if (comercio.beneficios.length > 0) {
  //         data.push(comercio);
  //       }
  //     });
  //   },
  //   (error) => {
  //     console.log(error)
  //   })


  // }


}
