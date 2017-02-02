import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { Location } from '@angular/common';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Reply } from '../reply.model';

@Component({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  providers: [PostService]
})
export class PostDetailComponent implements OnInit {
  postId: string;
  post;
  replies;
  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private postService: PostService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = urlParameters['id'];
    });
    this.post = this.postService.getPostById(this.postId);
    this.replies = this.postService.getReplies(this.postId);
  }

  addReply(content: string) {
    let newReply = new Reply(content, this.postId);
    this.postService.addReply(newReply);
  }
}
