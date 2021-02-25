import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-generar-coupon',
  templateUrl: './generar-coupon.component.html',
  styleUrls: ['./generar-coupon.component.css']
})
export class GenerarCouponComponent implements OnInit {

  @Input()dataCupon: any;
  @Output()sendData = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }

  volver(){
    this.sendData.emit(true)
  }
}
