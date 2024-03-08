// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RootRoutingModule } from './root-routing.module';

// components
import { LayoutComponent } from 'src/app/shared/components/layout/layout.component';
import { RootComponent } from './root/root.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './components/post/post.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';

@NgModule({
  declarations: [LayoutComponent, RootComponent, FeedComponent, PostComponent, PostFormComponent, CommentListComponent, CommentFormComponent],
  imports: [CommonModule, RootRoutingModule, MatToolbarModule, MatIconModule, MatButtonModule,MatMenuModule, MatCardModule, MatInputModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatProgressSpinnerModule],
})
export class RootModule {
}

// TODO: move pages into their own folder
