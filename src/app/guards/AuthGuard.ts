import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import * as alertify from 'alertifyjs';
import { ChecklistService } from '../services/checklist.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private cs: CookieService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {
    const cookieValue = this.cs.get('Auth');
    if (cookieValue === 'true') return true;

    alertify.error('You are not authorized to access this page');
    return false;
  }
}
