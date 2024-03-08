import { Component, Input } from '@angular/core';
import { Post } from 'src/app/core/models/post.model';
import { ProfileService } from 'src/app/core/services/profile.service';
import { DialogService } from '../../../../core/services/dialog.service';
import { CommentListComponent } from '../comment-list/comment-list.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';

@Component({
  selector: 'fs-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
})
export class PostComponent {
  @Input() post!: Post;

  constructor(public readonly profileService:ProfileService, private dialogService: DialogService) {
  }

  openComments() {
    this.dialogService.show(CommentListComponent,this.post?{item:this.post}:null)
  }

  openCommentForm(){
    this.dialogService.show(CommentFormComponent,this.post?{item:this.post}:null)
  }
}
