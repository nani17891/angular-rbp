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

  setUserRole(value){
  	this.USER_ROLE = value;
  }

  getUserRole() {
  	this.USER_ROLE;
  }

  isAdmin(){
  	return this.USER_ROLE == "ADMIN";
  }

  isConfigurator(){
  	return this.USER_ROLE == "configurator";
  }
}
