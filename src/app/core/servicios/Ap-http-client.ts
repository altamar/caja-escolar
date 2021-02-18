
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ENV } from '../../../environments/environment';


@Injectable()
export class ApHttpClient {

  constructor(
    public http: HttpClient,
  ) { }

  get<T>(resource: string, params: any, url = ENV.API_URL): Observable<T> {
    return this.http.get<T>(url + resource, {
      params
    }).pipe(
      tap( // Log the result or error
        data => this.log(data),
        error => this.handleError(error)
      )
    );
  }


  getcustonheader<T>(resource: string, headerOptions: any): Observable<T> {
    const headers = headerOptions ? headerOptions : null;
    return this.http.get<T>( ENV.API_URL + resource, {
      headers
    }).pipe(
      tap( // Log the result or error
        data => this.log(data),
        error => this.handleError(error)
      )
    );
  }

  simpleGet(resource: string): Observable<any> {
    return this.http.get( ENV.API_URL + resource, { responseType: 'text' });
  }



  post<T>(resource: string, body: any, url = ENV.API_URL, headerOptions?: any): Observable<T> {
    const headers = headerOptions ? new HttpHeaders(headerOptions) : null;
    return this.http.post<T>(
      url + resource,
      body,
      { headers }
    ).pipe(
      tap( // Log the result or error
        data => this.log(data),
        error => this.handleError(error)
      )
    );
  }

  put<T>(resource: string, body: any, url =  ENV.API_URL, headerOptions?: any): Observable<T> {
    const headers = headerOptions ? new HttpHeaders(headerOptions) : null;
    return this.http.put<T>(
      url + resource,
      body,
      { headers }
    ).pipe(
      tap( // Log the result or error
        data => this.log(data),
        error => this.handleError(error)
      )
    );
  }

  private log<T>(data: any) {
    if (ENV.production == false) {
      console.log('*** PIPE ****');
      console.log(data);
    }
  }

  private handleError<T>(httpErrorResponse: HttpErrorResponse) {
    if (ENV.production == false) {
      console.log('*** HANDLE ERROR ****');
      console.log(httpErrorResponse);
    }

  }
}
