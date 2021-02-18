import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { ImodalData } from 'src/app/models/ImodalData';
import { NumberFormatPipe } from 'src/app/shared/number.pipe';
import { Carga } from 'src/app/models/carga';
import { Comercio } from 'src/app/models/comercio';
import { Beneficio } from 'src/app/models/beneficio';
import { ModalService } from 'src/app/core/servicios/modal.service';

@Component({
  selector: 'app-copago-coupon',
  templateUrl: './copago-coupon.component.html',
  styleUrls: ['./copago-coupon.component.css']
})
export class CopagoCouponComponent implements OnInit {


  @Input()beneficiario:any;
  @Input()convenio:any;

  @Output()sendData = new EventEmitter<any>();

  @ViewChild("detailCoupon")
  detalleCupon: ElementRef


  newCarga: Carga;
  beneficio: Beneficio;
  comercio: Comercio;
  checked: boolean = false;
  selecionar: string;



  constructor(
    public numberPipe: NumberFormatPipe,
    private modalService: ModalService
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

  showModalComisiones(){
    this.modalService.open('modalComisiones', this.beneficio)
  }

  showModalGenerar(){
    this.modalService.open('modalGenerar', [this.comercio, this.newCarga])
  }

  ngModelchange(comercioSelect: Comercio){
    this.comercio = comercioSelect;
    var beneficioValido;
    comercioSelect.beneficios.forEach(e => {
      if(this.numberPipe.localeString(e.descuento_principal) === this.numberPipe.localeString(this.newCarga.montoCupon)){
        if(e){
          beneficioValido = e;
        }
      }
    });

    if(beneficioValido){
      this.beneficio = beneficioValido;
      this.comercio.beneficios = [beneficioValido];
      document.getElementById('div-condiciones').className="";
    }else{
      this.beneficio = null;
      this.checked = true;
      this.checkInput();
      document.getElementById('div-condiciones').className="d-none";
    }

  }

  verCupon(carga: any){
    this.sendData.emit(carga)
    console.log('show cupon')
  }


}
