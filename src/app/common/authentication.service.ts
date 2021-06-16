import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  /* Update user role based on logged in user
  	ADMIN
  	configurator
  */

  USER_ROLE: any  = "configurator"

  constructor() { 

  }

  setUserRole(roles){
    this.USER_ROLE = roles;
  }

  getUserRole() {
  	this.USER_ROLE;
  }

  isAdmin(){
  	return this.USER_ROLE.includes('RTBP.Admin.Admin');
  }

  isConfigurator(){
    return this.USER_ROLE.includes('RTBP.Configurator.Configurator');
  }
}
