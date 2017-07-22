import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

//remember have to import new service into app.module.ts
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  email:string;
  password:string;

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessagesService: FlashMessagesService

  ) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log('attempting login' + this.email);
    //a promise    
    this.authService.login(this.email,this.password)
      .then((res) => {
        this.flashMessagesService.show('You are logged in', {cssClass: 'alert-success',timeout: 4000});
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.flashMessagesService.show(err.message, {cssClass: 'alert-danger',timeout: 4000});
        this.router.navigate(['/login']);
      });
  }
  onLogoutClick() {
      this.authService.logout();
      this.flashMessagesService.show("You are logged out", {cssClass: 'alert-success',timeout: 4000});
      this.router.navigate(['/login']);
  }

}
