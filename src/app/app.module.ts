// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';

// providers
import { addAuthorizationHeaderInterceptorProvider } from './core/providers/add-authorization-header-interceptor.provider';

// components
import { AppComponent } from './app.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { DialogService } from './core/services/dialog.service';

@NgModule({
  declarations: [AppComponent, DialogComponent],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, BrowserAnimationsModule,MatDividerModule, MatSnackBarModule,MatDialogModule],
  providers: [addAuthorizationHeaderInterceptorProvider,DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
