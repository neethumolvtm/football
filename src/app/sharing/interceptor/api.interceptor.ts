// api.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<Object>,
    next: HttpHandler
  ): Observable<HttpEvent<Object>> {
    request = request.clone({
      setHeaders: {
        'x-rapidapi-key': 'e194015c5bd4bb6ec5b2d7370fa88699',
      },
    });
    return next.handle(request);
  }
}
