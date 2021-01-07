import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/core/servicios/modal.service';
import {ImodalData} from '../../../models/ImodalData'

@Component({
  selector: 'app-condiciones-modal',
  templateUrl: './condiciones-modal.component.html',
  styleUrls: ['./condiciones-modal.component.css']
})
export class CondicionesModalComponent implements OnInit {

  @Input() id: string;
  private element: any;
  data:ImodalData;
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
    open(data): void {
        this.data=data;
        console.log('data' ,data)
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
