import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { authRoutes, LocalStorageService } from '../utils';


@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.localStorageService.getToken()) {
      return true;
    }
    this.localStorageService.flushAll();
    this.router.navigate([`/${authRoutes.main}/${authRoutes.login}`]);
    return false;
  }
}
