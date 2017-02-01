import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { PostService } from '../post.service';
import { User } from '../user.model';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css'],
  providers: [UserService, PostService]
})
export class MessageBoardComponent implements OnInit {
  posts: FirebaseListObservable<any[]>;
  public isLoggedIn: boolean;
  users: FirebaseListObservable<any[]>;
  currentUser;
  currentUserEmail: string = "";
  authSubscription;
  constructor(private userService: UserService, private router: Router, private postService: PostService) {
    this.userService.checkAuth().subscribe(
      (authResponse) =>  {
        if(authResponse == null) {
          console.log("Not logged in");
          this.isLoggedIn = false;
        } else {
          console.log("Successfully logged in");
          if(authResponse != undefined) {
            console.log("Defined");
          }
          console.log(authResponse);
          this.currentUser = "Test";
          console.log(this.currentUser + "authResponse: " + authResponse);
          this.currentUser = authResponse;
          this.currentUserEmail = authResponse.google.email;
          // let newUser: User = new User(authResponse.google.displayName, authResponse.google.email);
          // console.log("Welcome" + this.currentUser.name + this.currentUser.email);
          // this.currentUser = newUser;
          this.isLoggedIn = true;
          debugger;
          // if(this.isLoggedIn) {
          //   this.currentUser.name = authResponse.google.displayName;
          //   this.currentUser.email = authResponse.google.email;
          //   console.log("Current User" + this.currentUser.name + this.currentUser.email);
          // }
        }
      },
      (err) => {
        console.log("Recieved error: ", err);
      },
      (data) => {
        console.log("Completed");
      }
    );
    // this.userService.getUserByEmail(this.currentUserEmail).subscribe(
    //   (emailResponse) => {
    //     if(this.isLoggedIn == true) {
    //       // this.currentUserEmail = emailResponse["object"].email;
    //       console.log("Email subscribe " + emailResponse);
    //     }
    //   }
    // );
    // if(this.currentUser) {
    //   this.currentUser.subscribe(
    //     (currentUserData) => {
    //       this.currentUserEmail = currentUserData.email;
    //       console.log("Changing current email to: " + currentUserData.email);
    //     }
    //   )
    // }
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.users = this.userService.getUsers();
    if(this.currentUser != undefined) {
      this.currentUserEmail = this.currentUser.email;
    }
  }

  ngDoCheck() {
    if(this.currentUser != undefined && this.currentUser.google.displayName != undefined) {
      console.log("Current User: " + this.currentUser.google.displayName);
      this.currentUserEmail = this.currentUser.google.email;
      console.log("Do Check changine email to: " + this.currentUserEmail);
    }
  }

  ngOnDestroy() {
    console.log("On Destroy:" + this.currentUserEmail);
  }

  login() {
    this.userService.login().then((data) => {
      this.router.navigate(['']);
    });
  }

  logout() {
    console.log("Logging Out");
    this.currentUser = null;
    this.userService.logout();
  }

  checkAuth() {
    this.userService.checkAuth();
  }
}
