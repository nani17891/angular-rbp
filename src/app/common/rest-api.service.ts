import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  baseUrl = 'http://192.168.0.104:5000';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  get(endPoint) {
    return this.httpClient.get(this.baseUrl + endPoint)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  post(endPoint,data) {
    return this.httpClient.post(this.baseUrl + endPoint, data, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }
  
  httpError(error) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(msg);
    return throwError(msg);
  }


}
