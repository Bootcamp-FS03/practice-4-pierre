import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../../../core/services/comment.service';
import { Comment } from '../../../../core/models/comment.model';
import { ProfileService } from '../../../../core/services/profile.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Post } from '../../../../core/models/post.model';
import { LoggerService } from '../../../../core/services/logger.service';

@Component({
  selector: 'fs-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.sass'],
})
export class CommentFormComponent {
  commentForm: FormGroup;


  constructor(private loggerService: LoggerService, private fb: FormBuilder, private commentService: CommentService, private profileService: ProfileService, @Inject(MAT_DIALOG_DATA) public data: {
                item: Post
              }, private readonly dialogRef: MatDialogRef<CommentFormComponent>,
  ) {
    this.commentForm = this.fb.group(
      { text: ['', Validators.required] },
    );
  }

  postComment() {
    const newComment: Comment = {
      text: this.commentForm.value.text,
      author: this.profileService.profile?._id || '',
      post: this.data.item._id,
    };
    this.commentService.postComment(newComment).subscribe({
      next: (res) => {
        this.dialogRef.close();
        this.loggerService.handleSuccess("Comment created successfully")
      },
    });
  }

}
