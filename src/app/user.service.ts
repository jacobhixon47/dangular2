import { Injectable, OnChanges } from '@angular/core';
import { Post } from './post.model';
import { AngularFire, FirebaseListObservable, AngularFireAuth } from 'angularfire2';
import { firebaseGoogleAuthConfig } from './app.module';

@Injectable()
export class UserService implements OnChanges {
  auth;
  constructor(private af: AngularFire, afauth: AngularFireAuth) {
    // afauth.subscribe(afauth => {
    //   this.auth = afauth;
    // });

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

  ngOnChanges(...args: any[]) {
    // this.afauth.subscribe(afauth => {
    //   // this.auth = auth.google.uid;
    //   console.log("uid: " + afauth.uid);
    // })
  }


}
