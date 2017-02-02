import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent {
  auth;
  constructor(private router: Router, private userService: UserService) {
  this.userService.checkAuth().subscribe(auth => console.log(auth));
}
  ngOnInit() {
    this.auth = this.userService.checkAuth();
  }

  login() {
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }

}
