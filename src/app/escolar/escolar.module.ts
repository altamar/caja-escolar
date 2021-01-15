import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{SharedModule} from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { EscolarRoutes } from './escolar.routes';
import { CajaEscolarComponent } from './components/caja-escolar/caja-escolar.component';
import {NgxPrintModule} from 'ngx-print';
import { CopagoCouponComponent } from './components/copago-coupon/copago-coupon.component';
import { DiscountCouponComponent } from './components/discount-coupon/discount-coupon.component';
import { DetalleCouponComponent } from './components/detalle-coupon/detalle-coupon.component';
import { GenerarCouponComponent } from './components/generar-coupon/generar-coupon.component';
import { GenerarModalComponent } from './components/generar-modal/generar-modal.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        EscolarRoutes,
        SharedModule,
        ReactiveFormsModule,
        NgxPrintModule
    ],
    exports: [],
    declarations: [
        CajaEscolarComponent,
        CopagoCouponComponent,
        DiscountCouponComponent,
        DetalleCouponComponent,
        GenerarCouponComponent,
        GenerarModalComponent],
    providers: [],
})
export class EscolarModule { }




