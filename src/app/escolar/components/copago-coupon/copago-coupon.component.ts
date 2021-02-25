import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { ImodalData } from 'src/app/models/ImodalData';
import { NumberFormatPipe } from 'src/app/shared/number.pipe';
import { Carga } from 'src/app/models/carga';
import { Comercio } from 'src/app/models/comercio';
import { Beneficio } from 'src/app/models/beneficio';
import { ModalService } from 'src/app/core/servicios/modal.service';
import { GenerarCuponService } from 'src/app/core/servicios/generar-cupon.service';
import { CustomApiService } from 'src/app/core/servicios/custom-api.service';
import { OptionsModal, TypeModal } from 'src/app/models/modal.options';

@Component({
  selector: 'app-copago-coupon',
  templateUrl: './copago-coupon.component.html',
  styleUrls: ['./copago-coupon.component.css']
})
export class CopagoCouponComponent implements OnInit {
  private OptionsELoad = new OptionsModal(TypeModal.error , false);


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
    private modalService: ModalService,
    private cuponService: GenerarCuponService,
    private customApi: CustomApiService
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
    var cuponData: any = {
      cargaData: carga,
      comercioData: null,
      cuponData: null
    };

    //Solicito datos del cupon y los guardo
    this.cuponService.getCupon(carga.codigoCupon).subscribe((response) => {
      cuponData.cuponData = response
      //Solicito datos del convenio y los guardo
      this.customApi.getConvenio(carga.idConvenio).subscribe((response) => {
        cuponData.comercioData = response

        //Llamo a la vista donde se muestra el cupon
        this.sendData.emit(cuponData)
      },
      (error) => {
        this.modalService.open('errormodal', this.OptionsELoad)
        console.log(error)
      })
    },
    (error) => {
      this.modalService.open('errormodal', this.OptionsELoad)
      console.log(error)
    })

  }


}
