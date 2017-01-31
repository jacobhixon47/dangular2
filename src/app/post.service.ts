import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) {
    this.posts = af.database.list('posts');
  }

  getPosts() {
    return this.posts;
  }

  getPostById(postId: string) {
    return this.af.database.object('/posts/' + postId);
  }

}
