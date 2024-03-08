import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from '../../../../core/models/post.model';
import { CommentService } from '../../../../core/services/comment.service';
import { Comment, CommentFromService } from '../../../../core/models/comment.model';

@Component({
  selector: 'fs-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.sass']
})
export class CommentListComponent implements OnInit{


  comments:CommentFromService[]|null=[]
  constructor(@Inject(MAT_DIALOG_DATA) public data: { item: Post },private commentService:CommentService) {

  }

  ngOnInit() {
    this.commentService.loadComments(this.data.item._id).subscribe({next:(res)=>{this.comments=res}})
  }


}
