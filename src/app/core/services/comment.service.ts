import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment, CommentFromService } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private readonly BASE_URL = environment.baseUrl;
  private readonly COMMENT_URL = environment.api.comment;
  private comments:Comment[]=[];
  constructor(private http: HttpClient) { }

  loadComments(postId:string):Observable<CommentFromService[]>{
    return this.http.get<CommentFromService[]>(`${this.BASE_URL}${this.COMMENT_URL}?postId=${postId}`)
  }

  postComment(post:Comment):Observable<Comment>{
    return this.http.post<Comment>(`${this.BASE_URL}${this.COMMENT_URL}`,post)
  }
}
