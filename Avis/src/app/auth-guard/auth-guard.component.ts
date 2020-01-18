import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Injectable()
export class AuthGuardComponent implements CanActivate {

  constructor(private authService: AuthenticationService) {}

  canActivate() {
    return this.authService.isUserLoggedIn();
  }
}