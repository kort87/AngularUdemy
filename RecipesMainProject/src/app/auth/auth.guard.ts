import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private authService: AuthService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.userSubject.pipe(map(user => {
      console.log(user);
      return (user == null) ? false : true;
    }), tap(isAuth => {
      if (!isAuth) {
        console.log('Redirection vers page d\'authentification!');
        this.router.navigate(['/auth']);
      }
    }));
  }
}
