import { Component, Input, OnInit } from '@angular/core';
import { CreatePost, Post } from 'src/app/core/models/post.model';
import { ProfileService } from 'src/app/core/services/profile.service';
import { DialogService } from '../../../../core/services/dialog.service';
import { CommentListComponent } from '../comment-list/comment-list.component';
import { CommentFormComponent } from '../comment-form/comment-form.component';
import { PostsService } from '../../../../core/services/posts.service';
import { LoggerService } from '../../../../core/services/logger.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fs-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass'],
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  isEdit=false;
  editForm!: FormGroup;

  constructor(public readonly profileService:ProfileService,private fb: FormBuilder, private dialogService: DialogService,private postService:PostsService, private loggerService:LoggerService) {

  }
  ngOnInit() {
    // Initialize the form inside ngOnInit
    this.editForm = this.fb.group({
      text: [this.post ? this.post.text : "Default text", Validators.required]
    });
  }

  openComments() {
    this.dialogService.show(CommentListComponent,this.post?{item:this.post}:null)
  }

  openCommentForm(){
    this.dialogService.show(CommentFormComponent,this.post?{item:this.post}:null)
  }

  deletePost(){
    this.postService.deletePost(this.post._id).subscribe({next:()=>{
      this.loggerService.handleSuccess("Post deleted")
      }})
  }

  openEditForm(){
    this.isEdit=true;
  }


  submitEdit(){
    const newPost:CreatePost={
      author:this.post.author._id,
      text:this.editForm.value.text
    }
    this.postService.editPost(newPost,this.post._id).subscribe({
      next:()=>{
        this.isEdit=false;
        this.loggerService.handleSuccess("Post updated")
      }
    })
  }


}
