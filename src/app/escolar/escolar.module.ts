import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{SharedModule} from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { EscolarRoutes } from './escolar.routes';
import { CajaEscolarComponent } from './components/caja-escolar/caja-escolar.component';
import {NgxPrintModule} from 'ngx-print';






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
        CajaEscolarComponent],
    providers: [],
})
export class EscolarModule { }




