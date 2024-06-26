import { Component } from '@angular/core';
import { Post } from '../post/post';
import { PostService } from '../post/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  id!:number;
  post!:Post;

  constructor(public postservice:PostService, private router:Router, private route:ActivatedRoute){

  }

  ngOnInit(){
    this.id = this.route.snapshot.params['postId'];
    this.postservice.find(this.id).subscribe((data:Post)=>{
      this.post = data;
    })
  }
}
