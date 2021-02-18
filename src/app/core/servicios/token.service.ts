import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders ,HttpBackend  } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ApInMemoryProvider } from '../storage/ap-in-memory/ap-in-memory';
import { InMemoryKeys } from '../storage/in-memory-key';
@Injectable({
    providedIn: 'root'
  })
export class TokenService {
    private httpWithoutInterceptor: HttpClient;

    constructor(
        private httpBackend: HttpBackend,
        private apInMemoryProvider:ApInMemoryProvider
    ) {  this.httpWithoutInterceptor = new HttpClient(httpBackend);


    }
    getTokenPortabilidad():Observable<any>{
      const body = new HttpParams()
      .set('grant_type', ENV.grant_type)
      .set('username', ENV.username)
      .set('password', ENV.password);
      return this.httpWithoutInterceptor.post<any>(ENV.API_URL_TOKEN, body
      ,{
             headers: new HttpHeaders()
              .set('Content-Type', ['application/x-www-form-urlencoded'])
              .set('x-api-key',ENV.x_api_key)
              .set('Authorization',`Basic ${ENV.authorization}`)
          }
         ).pipe(
              tap(value => this.apInMemoryProvider.setItemByKey(InMemoryKeys.AccesToken ,value.access_token ) )
       )
    }



    getToken():Observable<any>{
         return this.refreshToken();
    }

    refreshToken():Observable<any>{
        const body = new HttpParams()
        .set('grant_type', ENV.grant_type)
        .set('username', ENV.username)
        .set('password', ENV.password);
        return this.httpWithoutInterceptor.post<any>(ENV.API_URL_TOKEN, body
        ,{
               headers: new HttpHeaders()
                .set('Content-Type', ['application/x-www-form-urlencoded'])
                .set('x-api-key',ENV.x_api_key)
                .set('Authorization',`Basic ${ENV.authorization}`)
            }
           ).pipe(
                tap(value => this.apInMemoryProvider.setItemByKey(InMemoryKeys.AccesToken ,value.access_token ) )
         )
       }
}
