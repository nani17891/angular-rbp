import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      withCredentials: true
    });
    return next.handle(request).pipe(
      catchError((response: HttpErrorResponse) => {
        if (response.status === 401) {
          window.location.href ="https://idm.dev.zsservices.com/IntelliSuiteMMix/IdentityManager/app/Web/login.aspx?ReturnUrl=https%3a%2f%2frtbp-local-backend.zsservices.com%2f";
        }
        return throwError(response);
      })).pipe(
      filter(event => event instanceof HttpResponse),
      map((event: HttpResponse<any>) => event.clone({ body: event.body.payload }))
    )
  }
}
