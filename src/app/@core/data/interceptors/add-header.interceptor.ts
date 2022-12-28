import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../../utils';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(request: HttpRequest<unknown | unknown[]>, next: HttpHandler): Observable<HttpEvent<unknown | unknown[]>> {
    if (this.localStorageService.getToken() && !request.url.includes(environment.CMS_API)) {
      request = request.clone({
        headers: request.headers.set('Authorization', `${this.localStorageService.getToken()}`),
      });
    }

    return next.handle(request);
  }
}
