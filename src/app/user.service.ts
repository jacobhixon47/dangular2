import { Injectable, OnChanges } from '@angular/core';
import { Post } from './post.model';
import { AngularFire, FirebaseListObservable, AngularFireAuth, FirebaseObjectObservable } from 'angularfire2';
import { firebaseGoogleAuthConfig } from './app.module';

@Injectable()
export class UserService implements OnChanges {
  constructor(private af: AngularFire, private afauth: AngularFireAuth) {
    // af.auth.subscribe((user) => {
    //   if(user) {
    //     this.auth.google.uid = user;
    //   } else {
    //     console.log("No user");
    //   }
    // });
    // afauth.subscribe(afauth => {
    //   this.auth = afauth;
    // });

  }

  login() {
    return this.af.auth.login();
    // console.log("login function stuff:" + this.af.auth);
  }

  logout() {
    return this.af.auth.logout();
  }

  checkAuth(): any {
    return this.af.auth;
    // console.log("checkAuth: " + this.auth);
  }

  ngOnChanges(...args: any[]) {
    // this.afauth.subscribe(afauth => {
    //   // this.auth = auth.google.uid;
    //   console.log("uid: " + afauth.uid);
    // })
  }
}
