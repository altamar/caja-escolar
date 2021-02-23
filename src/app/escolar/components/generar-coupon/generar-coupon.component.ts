import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generar-coupon',
  templateUrl: './generar-coupon.component.html',
  styleUrls: ['./generar-coupon.component.css']
})
export class GenerarCouponComponent implements OnInit {

  @Input()dataCupon: any;

  constructor() { }

  ngOnInit(): void {
  }

}
