import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { User } from '../user.model';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css'],
  providers: [UserService]
})
export class MessageBoardComponent implements OnInit {
  public isLoggedIn: boolean;
  users: FirebaseListObservable<any[]>;
  currentUser;
  currentUserEmail: string = "cmwingo@gmail.com";
  constructor(private userService: UserService, private router: Router) {
    this.userService.checkAuth().subscribe(
      (authResponse) => {
        if(authResponse == null) {
          console.log("Not logged in");
          this.isLoggedIn = false;
        } else {
          console.log("Successfully logged in");
          console.log(authResponse);
          this.currentUser = authResponse;
          // let newUser: User = new User(authResponse.google.displayName, authResponse.google.email);
          // console.log("Welcome" + this.currentUser.name + this.currentUser.email);
          // this.currentUser = newUser;
          this.isLoggedIn = true;
          // if(this.isLoggedIn) {
          //   this.currentUser.name = authResponse.google.displayName;
          //   this.currentUser.email = authResponse.google.email;
          //   console.log("Current User" + this.currentUser.name + this.currentUser.email);
          // }
        }
      }
    );
    this.userService.getUserByEmail(this.currentUserEmail).subscribe(
      (emailResponse) => {
        if(this.isLoggedIn == true) {
          this.currentUser = emailResponse;
          console.log(emailResponse);
        }
      }
    );
  }

  ngOnInit() {
    this.users = this.userService.getUsers();
    if(this.currentUser) {
      this.currentUser.subscribe(
        (currentUserData) => {
          this.currentUserEmail = currentUserData.email;
        }
      )
    }
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
