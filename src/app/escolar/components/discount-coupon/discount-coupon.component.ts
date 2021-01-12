import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount-coupon',
  templateUrl: './discount-coupon.component.html',
  styleUrls: ['./discount-coupon.component.css']
})
export class DiscountCouponComponent implements OnInit {

  @Input()convenio:any;

  title = "Random title"


  constructor() { }

  ngOnInit(): void {
  }

}
