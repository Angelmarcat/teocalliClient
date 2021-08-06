import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements CanActivate {
  constructor(private router: Router) { }
  async canActivate() {
    const isUserLoggedIn = await localStorage.getItem("isUserLoggedIn");
    if (!isUserLoggedIn) {
      return true
    } else {
      
      this.router.navigateByUrl("/lodgings");
      return false;
    }
  }

}