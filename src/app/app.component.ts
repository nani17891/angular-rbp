
import { Component, OnInit } from '@angular/core';
import { RestApiService } from './common/rest-api.service';
import { AuthenticationService } from './common/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  userlinks:any[];
  applicationlinks:any[];
  constructor(public restApi : RestApiService, public authService: AuthenticationService){
    this.restApi.post("/user_session/",{ Return_URL: location.href }).subscribe(response=>{
      let htmlContent = response["htmlContent"];
      this.userlinks = this.getLinks(htmlContent, "zs-link");
      this.applicationlinks = this.getLinks(htmlContent, "lbar-link");
      this.authService.setUserRole(response["roles"])
    })
  }
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  getLinks(htmlContent: string, htmlClass) {
    let s = document.createElement('div');
    s.innerHTML = htmlContent;
    let links = s.getElementsByClassName(htmlClass);
    let arr = [];
    for (let i = 0; i < links. length; i++) {
      var data = {link:links[i].getAttribute("href"), text: links[i].textContent} 
      arr.push(data);
    }
    return arr;
  }

}
  
