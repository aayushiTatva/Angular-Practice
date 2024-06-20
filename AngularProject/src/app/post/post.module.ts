import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostService } from './post/post.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,HttpClientModule
  ],
  providers: [PostService]
})

export class PostModule { }
