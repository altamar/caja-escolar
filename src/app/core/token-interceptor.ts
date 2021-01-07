import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpHeaders
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";

import {ApInMemoryProvider} from './storage/ap-in-memory/ap-in-memory';
import { InMemoryKeys } from './storage/in-memory-key';
import { TokenService } from "./servicios/token.service";



@Injectable()
export class TokenInterceptor implements HttpInterceptor {
      constructor(
          private ApInMemoryProvider:ApInMemoryProvider ,   
          private readonly sessionService: TokenService ){
      }

      private _refreshSubject: Subject<any> = new Subject<any>();

      private _ifTokenExpired() {
              this._refreshSubject.subscribe({
                  complete: () => {
                  this._refreshSubject = new Subject<any>();
                  }
              });
              if (this._refreshSubject.observers.length === 1) {
                  this.sessionService.refreshToken().subscribe(this._refreshSubject);
              }
          return this._refreshSubject;
      }

      private _checkTokenExpiryErr(error: HttpErrorResponse): boolean {
          return ( error.status && error.status === 401);
        }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token:string = this.ApInMemoryProvider.getItemByKey(InMemoryKeys.AccesToken);
      const authReq  = req.clone({
            setHeaders:({
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json' 
            })
          });
         
        //  console.log('Intercepted HTTP call', authReq);
              return next.handle(authReq).pipe(
                catchError((error, caught) => {
                  if (error instanceof HttpErrorResponse) {
                    if (this._checkTokenExpiryErr(error)) {
                      return this._ifTokenExpired().pipe(
                        switchMap(() => {
                          return next.handle(this.updateHeader(req));
                        })
                      );
                    } else {
                      return throwError(error);
                    }
                  }
                  return caught;
                })

              );
  }

  updateHeader(req) {
      const authToken = this.ApInMemoryProvider.getItemByKey(InMemoryKeys.AccesToken);
      req = req.clone({
        headers: req.headers.set("Authorization", `Bearer ${authToken}`)
      });
      return req;
    }


  
}
