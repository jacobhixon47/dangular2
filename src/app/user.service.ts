import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { User } from './user.model';
import { AngularFire, FirebaseListObservable, AngularFireAuth, FirebaseObjectObservable } from 'angularfire2';
import { firebaseGoogleAuthConfig } from './app.module';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) {
    this.users = af.database.list('users');
  }

  getUsers() {
    return this.users;
  }

  addUser(newUser: User) {
    this.users.push(newUser);
  }

  getUserById(userId: string) {
    return this.af.database.object('/users/' + userId);
  }

  getUserByEmail(userEmail: string) {
    return this.af.database.list('users', {
          query: {
            orderByChild: 'email',
            equalTo: userEmail
          }
        });

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
}
