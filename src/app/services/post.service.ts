import {Injectable} from '@angular/core';
import {Post} from '../models/post.model';
import {Subject} from 'rxjs';

import * as firebase from 'firebase';

@Injectable()
export class PostService {
  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPost();
  }
  emitPosts() {
    this.postsSubject.next(this.posts);
  }
  getPost() {
    firebase.database().ref('/posts')
      .on('value', (data: firebase.database.DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  createNewPost(newPost: Post) {
      this.posts.push(newPost);
      this.savePosts();
      this.emitPosts();
  }
}
