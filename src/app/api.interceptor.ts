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
        'x-rapidapi-key': '7a0f069bacaf7e92cd8425c1744396e1',
      },
    });
    return next.handle(request);
  }
}
