import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css'],
  providers: [UserService]
})
export class MessageBoardComponent implements OnInit {
  public isLoggedIn: boolean;
  constructor(private userService: UserService, private router: Router) {
    this.userService.checkAuth().subscribe(
      (authResponse) => {
        if(authResponse == null) {
          console.log("Not logged in");
          this.isLoggedIn = false;
        } else {
          console.log("Successfully logged in");
          this.isLoggedIn = true;
        }
      }
    );
  }

  ngOnInit() {
  }

  login() {
    this.userService.login().then((data) => {
      this.router.navigate(['']);
    });
  }

  logout() {
    console.log("Logging Out");
    this.userService.logout();
  }

  checkAuth() {
    this.userService.checkAuth();
  }
}
