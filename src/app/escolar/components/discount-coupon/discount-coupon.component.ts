import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomApiService } from 'src/app/core/servicios/custom-api.service';
import { GenerarCuponService } from 'src/app/core/servicios/generar-cupon.service';
import { ModalService } from 'src/app/core/servicios/modal.service';
import { ApInMemoryProvider } from 'src/app/core/storage/ap-in-memory/ap-in-memory';
import { InMemoryKeys } from 'src/app/core/storage/in-memory-key';
import { OptionsModal, TypeModal } from 'src/app/models/modal.options';

@Component({
  selector: 'app-discount-coupon',
  templateUrl: './discount-coupon.component.html',
  styleUrls: ['./discount-coupon.component.css']
})
export class DiscountCouponComponent implements OnInit {
  private OptionsELoad = new OptionsModal(TypeModal.error , false);
  @Input()convenio:any;
  @Input()beneficiario:any;
  @Output()sendData = new EventEmitter<any>();
  checked2: boolean = false;
  showDet = false;
  idbene = '0';
  convenioFiltered = [];
  beneficio;
  constructor(
    private modalService: ModalService,
    private customApi: CustomApiService,
    private cuponService: GenerarCuponService,
    private apInMemoryProvider: ApInMemoryProvider
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

  showModalGenerar(bene: any, conv: any){

    const cuponData = {
      beneficioData: bene,
      comercioData: conv,
      descuentoCupon: true,
      cuponData: null
    }

    this.cuponService.generarDescuento(cuponData).subscribe((response) => {
      cuponData.cuponData = response
      this.modalService.close('loadmodal');
      this.sendData.emit(cuponData)
    },
    (error) => {
      this.modalService.open('errormodal', this.OptionsELoad)
      console.log(error)
    })
  }
}
