import { Component, OnInit, Input, ElementRef, ContentChild, TemplateRef, OnDestroy } from '@angular/core';
import { OptionsModal ,TypeModal } from '../../../models/modal.options';

import {ModalService} from '../../../core/servicios/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy  {

  @Input() id: string;
  private element: any;

  
  
  options:OptionsModal ={type: "", ShowCancel:true };



 img:any = {
    error :"../../../assets/img/alerta.png",
    question :'../../../assets/img/pregunta.png',
    success :'../../../assets/img/ok.png',
    info: '../../../assets/img/alerta.png',
    warning: '../../../assets/img/alerta.png',
    load:'../../../assets/img/cargando-ms.gif'
  }


  get src() { return    this.img[this.options.type]}
    visibleAnimate:boolean;
    visible:boolean;
    constructor(private modalService: ModalService, private el: ElementRef) {
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
    open(options): void {
        this.options=options;
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
}
