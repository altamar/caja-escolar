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
import { Carga } from 'src/app/models/carga';
import { Comercio } from 'src/app/models/comercio';

@Component({
  selector: 'app-copago-coupon',
  templateUrl: './copago-coupon.component.html',
  styleUrls: ['./copago-coupon.component.css']
})
export class CopagoCouponComponent implements OnInit {


  @Input()beneficiario:any;
  @Input()convenio:any;

  newCarga: Carga;
  comercio: Comercio;
  checked: boolean = false;


  constructor(
    private getParametersService: GetParametersService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public numberPipe: NumberFormatPipe
  ) { }

  ngOnInit(): void {

  }


  solicitarDatosCupon(carga){
    this.newCarga = carga;

    var couponDetail = document.getElementById('coupon-detail');
    couponDetail.classList.remove('d-none');
    couponDetail.scrollIntoView({block: "center"});

    //console.log(this.newCarga);
  }


  ngModelchange(comercioSelect: Comercio){
    this.comercio = comercioSelect;
    document.getElementById('div-condiciones').className="";
  }


  checkInput(){
    if(this.checked == false){
      this.checked = true;
      var btnAceptar = document.getElementById('btnAceptar');
      btnAceptar.classList.remove('tooltip-hover-disabled');

    }else if(this.checked == true){
      this.checked = false;
      document.getElementById('btnAceptar').className += ' tooltip-hover-disabled';
    }
  }

  matchMonto(montoCarga){

    var montoCarga = montoCarga;
    var beneficioValido;

    this.comercio.beneficios.forEach(elem => {
      if(elem.beneficioespecial == "1" && elem.descuento_principal == montoCarga){
        if(elem){
          beneficioValido = elem;
        }
      }
    });

    if(beneficioValido){
      console.log('Existes descuento');
    }else{
      console.log('No existe descuento')
    }
  }




}
