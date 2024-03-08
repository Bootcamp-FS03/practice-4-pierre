import { Author } from './author.model';
import { Post } from './post.model';

export interface Comment{
  text: string;
  author: string;
  post: string;
}

export interface CommentFromService{
  _id:string;
  author:Author;
  text:string;
  post:Post;
  createdAt:Date;
}
