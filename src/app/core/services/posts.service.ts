import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CreatePost, Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly BASE_URL = environment.baseUrl;
  private readonly POST_URL = environment.api.post;
  private postsSubject: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) {
    this.loadPosts();
  }

  get posts$(): Observable<Post[]> {
    return this.postsSubject.asObservable();
  }

  createPost(post: CreatePost): Observable<Post> {
    return this.http.post<Post>(`${this.BASE_URL}${this.POST_URL}`, post).pipe(
      tap((newPost: Post) => {
        this.loadPosts();
      }),
    );
  }

  private loadPosts(): void {
    this.http.get<Post[]>(`${this.BASE_URL}${this.POST_URL}`).pipe(
      map(posts => posts.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB.getTime() - dateA.getTime();
      })),
    ).subscribe(posts => {
      this.postsSubject.next(posts);
      console.log(posts);
    });
  }
}
