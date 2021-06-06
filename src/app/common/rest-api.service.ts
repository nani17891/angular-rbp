import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  baseUrl = 'https://rbjne6jh2c.execute-api.us-east-1.amazonaws.com/dev';

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

  put(endPoint,data) {
    return this.httpClient.put(this.baseUrl + endPoint, data, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  patch(endPoint,data) {
    return this.httpClient.patch(this.baseUrl + endPoint, data, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  delete(endPoint,data) {
    return this.httpClient.delete(this.baseUrl + endPoint)
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
