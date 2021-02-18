import {Injectable} from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
  Params
} from '@angular/router';
import {InMemoryKeys} from '../storage/in-memory-key';
import {ApInMemoryProvider} from '../storage/ap-in-memory/ap-in-memory';
import { DatosUsuarioService } from './datos-usuario.service';
import {CustomApiService } from './custom-api.service';



@Injectable({
  providedIn: 'root'
})
export class GetParametersService implements CanActivate {
  constructor(private activatedRoute: ActivatedRoute,
                private apInMemoryProvider: ApInMemoryProvider,
                private datosUsuarioService: DatosUsuarioService,
                private getToken: CustomApiService
              ) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (state.url.indexOf('/escolar') !== -1 ){
      this.activatedRoute.queryParams.subscribe((params: Params) => {
        if (params.crut) {
          console.log('Poner los servicios')
          this.apInMemoryProvider.setItemByKey(InMemoryKeys.RUT_Encriptado, params.crut.replace(/\s/g, '+') )
          this.getToken.loadData(params.crut.replace(/\s/g, '+'))
          // this.apInMemoryProvider.setItemByKey(InMemoryKeys.RUT_Encriptado, params.crut.replace(/\s/g, '+') );
          // this.datosUsuarioService.loadData(params.crut.replace(/\s/g, '+'));
        }
      });
    }
    return true;
  }

  // descifrar(cad: string): Observable<any>{
  //   const req = {cifrado: cad};
  //   return this.apHttpClient.post<IDatosCertificado>('/CLA_Personas_ZeroQDecrypt-v1_0_EXP/Proxies/PX_ZeroQDecryptExpSOAP12', req);
  // }
}
