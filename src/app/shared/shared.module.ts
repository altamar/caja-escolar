import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent} from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { ModalComponent } from './components/modal/modal.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import  { AccordionGroup } from './components/accordion/accordion-group.component';
import { HeaderComponent } from './components/header/header.component';
import { CancelarComponent } from '../shared/components/cancelar/cancelar.component';
import { AdvertenciaComponent } from './components/advertencia/advertencia.component';
import { VolverComponent } from './components/volver/volver.component';
import { NumberFormatPipe } from './number.pipe';
import { CondicionesModalComponent } from './components/condiciones-modal/condiciones-modal.component';

import { RouterLinkCustomDirective } from "./directive/router-link-external";
@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        PageNotFoundComponent,
        FooterComponent,
        ErrorComponent,
        ModalComponent,
        AccordionComponent,
        AccordionGroup,
        HeaderComponent,
        CancelarComponent,
        AdvertenciaComponent,
        VolverComponent,
        NumberFormatPipe,
        CondicionesModalComponent,
        RouterLinkCustomDirective
    ],

    exports: [
        PageNotFoundComponent,
        FooterComponent,
        ErrorComponent,
        ModalComponent,
        AccordionComponent,
        AccordionGroup,
        HeaderComponent,
        CancelarComponent,
        AdvertenciaComponent,
        VolverComponent,
        NumberFormatPipe,
        CondicionesModalComponent,
        RouterLinkCustomDirective
    ],

    providers: [NumberFormatPipe]
})

export class SharedModule { }
