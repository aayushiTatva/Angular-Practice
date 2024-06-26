import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Category } from '../category';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent {
  id!: number;
  category!: Category;
  form!: FormGroup;
  
  constructor(public categoryservice: CategoryService, private route:ActivatedRoute, private router:Router){
    
  }
  
  ngOnInit(): void{
    this.id = this.route.snapshot.params['categoryId'];
    this.categoryservice.find(this.id).subscribe((data:Category) =>{
      this.category = data;
    });
  
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
    });
  }
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
    this.categoryservice.update(this.id, this.form.value).subscribe((res:any) =>{
      alert('Category edited successfully');
      this.router.navigateByUrl('category/list');
    })
  }
}
