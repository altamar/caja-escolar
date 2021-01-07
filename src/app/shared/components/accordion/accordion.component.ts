import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent  {

  @Input()title:string;
  @Input()active:boolean = false;
  
  @Output()toggleAccordion: EventEmitter<boolean> = new EventEmitter();

  constructor() {}
  
  onClick(event) {
    event.preventDefault();
    this.toggleAccordion.emit(this.active);
  }

}
