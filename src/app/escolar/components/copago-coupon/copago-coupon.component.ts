import { Component, OnInit, Input } from '@angular/core';
import {
  ActivatedRoute,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  Params,
  CanActivate,
  Router,
  RouterState
} from '@angular/router';
import { ApHttpClient } from 'src/app/core/servicios/Ap-http-client';
import { GetParametersService } from 'src/app/core/servicios/get-parameters.service';
import { ImodalData } from 'src/app/models/ImodalData';
import { NumberFormatPipe } from 'src/app/shared/number.pipe';

@Component({
  selector: 'app-copago-coupon',
  templateUrl: './copago-coupon.component.html',
  styleUrls: ['./copago-coupon.component.css']
})
export class CopagoCouponComponent implements OnInit {


  @Input()beneficiario:any;
  @Input()convenio:any;


  constructor(
    private getParametersService: GetParametersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public numberPipe: NumberFormatPipe
  ) { }

  ngOnInit(): void {
    /*this.activatedRoute.queryParams.subscribe((params: Params) => {
    console.log(params.id)
    })*/

    //This thing should work, need more service testing, wait until reunion for questiongs about service order or hardcode data
    console.log(this.getParametersService.canActivate(this.activatedRoute.snapshot, this.router.routerState.snapshot))



    let url = this.router.routerState.snapshot;
    console.log(url.url)
    console.log(this.activatedRoute.snapshot)

  }


  solicitarDatosCupon(crut: string, cc: string){

    console.log(crut, cc);
  }




}
