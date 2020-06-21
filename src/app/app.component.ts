import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lectura de cookies desde angular';
  private cookieValue: string;

    constructor(private cookieService:CookieService) {}

    public ngOnInit(){
      this.cookieService.set('cookieName','cookieValue1');
      this.cookieService.set('cookieName','cookieValue2');
      this.cookieService.set('cookieName','cookieValue3');
      this.cookieValue = this.cookieService.get('cookieName');
      console.log('Valor leido de la cookie: '+  this.cookieValue);
    }


}
