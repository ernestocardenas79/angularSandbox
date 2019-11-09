import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad {
  canLoad(): Observable<boolean>  {
    return this.authService.isAuth()
                            .pipe(
                              take(1)
                            );
  }

  constructor(private authService: AuthService) { }

  canActivate() {
    return this.authService.isAuth();
  }
}
