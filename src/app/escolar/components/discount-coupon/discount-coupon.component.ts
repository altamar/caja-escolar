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



  filterConvenio(){
  //   this.convenio.map((e) => {
  //     e.beneficios = e.beneficios.filter((x) => { return x.beneficioespecial == '2'});
  //     if(e.beneficios.length > 0){
  //       this.convenioFiltered.push(e)
  //     };
  //   })
    console.log(this.convenio)
    // var filteredList = this.convenio.result.beneficios
    //   .filter((item) => item.beneficioespecial == '1')
    //   .map((item) => item);

    // console.log(filteredList)
  }

  showDetails(bene){
    this.showDet = true;
    this.idbene = bene.idbeneficio;
    this.beneficio = bene;
  }

  checkInput(){
    if(this.checked2 == false){
      this.checked2 = true;
      var btnAceptar = document.getElementById('btnAceptar');
      btnAceptar.classList.remove('tooltip-hover-disabled');

    }else if(this.checked2 == true){
      this.checked2 = false;
      document.getElementById('btnAceptar').className += ' tooltip-hover-disabled';
    }
  }

  showModalComisiones(){
    this.modalService.open('modalComisiones', this.beneficio)
  }
}
