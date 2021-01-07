import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import {GetParametersService} from './core/servicios/get-parameters.service';


const routes: Routes = [
  { path: '', redirectTo: 'escolar' , pathMatch: 'full' },
  { path: 'escolar', 
    loadChildren: () => import('./escolar/escolar.module').then(m => m.EscolarModule), 
    canActivate: [GetParametersService]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [ GetParametersService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
