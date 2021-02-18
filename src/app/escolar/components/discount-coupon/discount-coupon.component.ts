import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/servicios/modal.service';

@Component({
  selector: 'app-discount-coupon',
  templateUrl: './discount-coupon.component.html',
  styleUrls: ['./discount-coupon.component.css']
})
export class DiscountCouponComponent implements OnInit {

  @Input()convenio:any;
  @Input()beneficiario:any;

  checked2: boolean = false;
  showDet = false;
  idbene = '0';
  convenioFiltered = [];
  beneficio;
  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }


  showDetails(bene){
    this.showDet = true;
    this.idbene = bene.idbeneficio;
    this.beneficio = bene;
  }

  checkInput(){
    if(this.checked2 == false){
      this.checked2 = true;
      var btnAceptar = document.getElementById('btnAceptar2');
      btnAceptar.classList.remove('tooltip-hover-disabled');

    }else if(this.checked2 == true){
      this.checked2 = false;
      document.getElementById('btnAceptar2').className += ' tooltip-hover-disabled';
    }
  }

  showModalComisiones(){
    this.modalService.open('modalComisiones', this.beneficio)
  }
}
