import { RouterModule,Routes } from '@angular/router';

import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { CajaEscolarComponent } from './components/caja-escolar/caja-escolar.component';



const routes: Routes = [
    { path: '', component: CajaEscolarComponent },
    { path: 'inicio', component: CajaEscolarComponent  }
];

export const EscolarRoutes = RouterModule.forChild(routes);
