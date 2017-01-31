import { Injectable, OnChanges } from '@angular/core';
import { Post } from './post.model';
import { AngularFire, FirebaseListObservable, AngularFireAuth } from 'angularfire2';
import { firebaseGoogleAuthConfig } from './app.module';

@Injectable()
export class UserService {
  auth;
  constructor(private af: AngularFire, afauth: AngularFireAuth) {
    this.auth.subscribe(auth => {
      if (afauth !== null) {
        auth = afauth.google.uid;
      } else {
        auth = null;
      }
      console.log("subscribe: " + auth)
    });
  }
  currentUser;

  login() {
    this.af.auth.login();
    // console.log("login function stuff:" + this.af.auth);
  }

  logout() {
    this.af.auth.logout();
  }

  checkAuth(){
    console.log("checkAuth: " + this.auth);
  }
}
