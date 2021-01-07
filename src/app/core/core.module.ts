import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {ApInMemoryProvider} from './storage/ap-in-memory/ap-in-memory'
import {ApHttpClient} from './servicios/Ap-http-client';
import {TokenService} from './servicios/token.service';
import {TokenInterceptor} from './token-interceptor';
import { DatosUsuarioService } from './servicios/datos-usuario.service';
import { GetParametersService } from './servicios/get-parameters.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ]
})

export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
            ngModule: CoreModule,
            providers: [
                ApHttpClient,
                ApInMemoryProvider,
                TokenService,
                DatosUsuarioService,
                GetParametersService ,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: TokenInterceptor,
                    multi: true
                  }

            ]
        };
    }
}
