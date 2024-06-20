import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../post/post.service';
import { Post } from '../post/post';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,RouterLink,HttpClientModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  posts: Post[] = [];
  constructor(public postservice: PostService){

  }

  ngOnInit(): void {
    this.postservice.getAll().subscribe((data: Post[])=>{
      this.posts = data;
      console.log(this.posts);
    })  
  }

  deletePost(id:number){
    this.postservice.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
  }
  
}

