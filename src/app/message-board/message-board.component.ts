import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { PostService } from '../post.service';
import { User } from '../user.model';
import { Post } from '../post.model';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.scss'],
  providers: [UserService, PostService]
})
export class MessageBoardComponent implements OnInit {
  auth;
  posts: FirebaseListObservable<any[]>;
  users: FirebaseListObservable<any[]>;

  constructor(private userService: UserService, private router: Router, private postService: PostService) {
    this.userService.checkAuth().subscribe((auth) => {
      this.auth = this.userService.checkAuth();
    });
  }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.users = this.userService.getUsers();
    this.auth = this.userService.checkAuth();
  }

  login() {
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }

  checkAuth() {
    this.userService.checkAuth();
  }

  addNewPost(title: string, content: string) {
    var newPost: Post = new Post(title, content);
    this.postService.addPost(newPost);
  }

  goToDetailsPage(post) {
    this.router.navigate(['posts', post.$key])
  }
}
