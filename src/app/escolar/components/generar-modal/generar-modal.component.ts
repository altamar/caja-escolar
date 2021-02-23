import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalService } from 'src/app/core/servicios/modal.service';
import { Carga } from 'src/app/models/carga';
import { Comercio } from 'src/app/models/comercio';
import { ImodalData } from 'src/app/models/ImodalData';
import { OptionsModal, TypeModal } from 'src/app/models/modal.options';
import { GenerarCuponService } from 'src/app/core/servicios/generar-cupon.service';

@Component({
  selector: 'app-generar-modal',
  templateUrl: './generar-modal.component.html',
  styleUrls: ['./generar-modal.component.css']
})
export class GenerarModalComponent implements OnInit {

  private OptionsMLoad = new OptionsModal(TypeModal.load , false);
  @Input() id: string;
  @Output()sendData = new EventEmitter<any>();
  private element: any;
  data:Comercio;
  data2: Carga;
  visibleAnimate:boolean;
  visible:boolean;


    constructor(
      private modalService: ModalService,
      private cuponService: GenerarCuponService,
      private el: ElementRef) {
      this.element = el.nativeElement;
    }

    ngOnInit(): void {
        let modal = this;

        // ensure id attribute exists
        if (!this.id) {
            return;
        }

        document.body.appendChild(this.element);

        // close modal on background click
        this.element.addEventListener('click', function (e: any) {
            if (e.target.className === 'ap-modal') {
                modal.close();
            }
        });

        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }

    // remove self from modal service when directive is destroyed
    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    // open modal
    open([data, data2]): void {
        this.data=data;
        this.data2=data2;
        this.element.style.display = 'block';
         document.body.classList.add('modal-open');
        this.visibleAnimate = true;
    }

    // close modal
    close(): void {
        this.visibleAnimate = false;
        this.element.style.display = 'none';
        document.body.classList.remove('modal-open');
    }


    matchMonto(montoCarga){


      var montoCarga = montoCarga;
      var beneficioValido;
      var elemt;

      this.data.beneficios.forEach(elem => {
        if(elem.beneficioespecial == "1" && elem.descuento_principal == montoCarga){
          if(elem){
            elemt = elem;
            beneficioValido = elem;
          }
        }
      });

      if(beneficioValido){
        //console.log('Existe descuento');
        const comercio = this.data
        const beneficio = elemt
        const carga = this.data2

        const datacupon: any =  {
          comercioData: comercio,
          beneficioData: beneficio,
          cargaData: carga,
        }

        //console.log('idConvenio', idconvenio, 'idBeneficio', idbeneficio, 'cargaRut', cargaRut)
        //console.log(this.data2)

        this.cuponService.generar(datacupon)
        //this.sendData.emit(this.data)
        this.sendData.emit(datacupon)
        this.close()
      }else{
        console.log('No existe descuento')
      }
    }

  generarCupon(data: any){
    this.cuponService.generar(data)
  }

}
