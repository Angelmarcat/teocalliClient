import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {map,tap} from 'rxjs/operators';
import {AuthService} from './core/services/auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private auth : AuthService,
    private router : Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.hasUser()
    .pipe(
      map(user => user === null ?false : true),
      tap(hasUser => {
        if(!hasUser){
          console.log(hasUser);
          this.router.navigate(['login'])
        }
      })
    );
  }
  
}
