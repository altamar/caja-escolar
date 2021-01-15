import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/servicios/modal.service';
import { Carga } from 'src/app/models/carga';
import { Comercio } from 'src/app/models/comercio';
import { Beneficio } from 'src/app/models/beneficio';
import { ImodalData } from 'src/app/models/ImodalData';
import { NumberFormatPipe} from 'src/app/shared/number.pipe';
@Component({
  selector: 'app-detalle-coupon',
  templateUrl: './detalle-coupon.component.html',
  styleUrls: ['./detalle-coupon.component.css']
})
export class DetalleCouponComponent implements OnInit {

  @Input()carga: any;

  @Input()beneficiario: any;
  @Input()convenio: any;



  newCarga: Carga;
  beneficio: Beneficio;
  comercio: Comercio;

  checked: boolean = false;
  selecionar: string;

  constructor(
    private modalService: ModalService,
    private numberPipe: NumberFormatPipe
  ) { }

  ngOnInit(): void {
    this.newCarga = this.carga;
  }

  showModalComisiones(){
    this.modalService.open('modalComisiones', this.beneficio)
  }

  showModalGenerar(){
    this.modalService.open('modalGenerar', [this.comercio, this.newCarga])
  }

  ngModelchange(comercioSelect: Comercio){
    this.comercio = comercioSelect;
    comercioSelect.beneficios.forEach(e => {
      if(e.beneficioespecial == "1" && this.numberPipe.localeString(e.descuento_principal) == this.numberPipe.localeString(this.newCarga.montoCupon)){
        if(e){
          this.beneficio = e;
          this.comercio.beneficios = [e];
        }
      }
    });

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

}
