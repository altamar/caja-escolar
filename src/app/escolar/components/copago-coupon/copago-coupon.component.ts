import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

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
  @ViewChild("detailCoupon")
  detalleCupon: ElementRef


  newCarga: Carga;
  checked: boolean = false;
  selecionar: string;



  constructor(
    public numberPipe: NumberFormatPipe
  ) { }

  ngOnInit(): void {

  }


  solicitarDatosCupon(carga){
    this.newCarga = carga;
    this.detalleCupon.nativeElement.scrollIntoView({block: 'center' ,​​behavior: 'smooth'});
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






}
