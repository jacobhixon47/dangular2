import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class PostService {
  posts: FirebaseListObservable<any[]>;
  replies: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) {
    this.posts = af.database.list('posts');
    this.replies = af.database.list('replies');
  }

  getPosts() {
    return this.posts;
  }

  getPostById(postId: string) {
    return this.af.database.object('/posts/' + postId);
  }

  addPost(newPost: Post) {
    this.posts.push(newPost);
  }

  getReplies(postId: string) {
    return this.af.database.list('replies', {
      query: {
        orderByChild: 'postId',
        equalTo: postId
      }
    });
  }

  addReply(newReply) {
    this.replies.push(newReply);
  }
}
