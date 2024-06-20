import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../post/post';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostService } from '../post/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  id!: number;
  post!: Post;
  form!: FormGroup;
      
  constructor( public postService: PostService,  private route: ActivatedRoute, private router: Router) { }
   
  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
    }); 
        
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }
     
  get f(){
    return this.form.controls;
  }
      
  
  submit(){
    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe((res:any) => {
         alert('Post updated successfully!');
         this.router.navigateByUrl('post/index');
    })
  }
}
