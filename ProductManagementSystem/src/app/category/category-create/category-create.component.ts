import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CategoryService } from '../category.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-category-create',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,MatCardModule,MatButtonModule,
  MatFormFieldModule,MatInputModule],
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css'
})
export class CategoryCreateComponent {
  form!: FormGroup;

  constructor(public categoryservice: CategoryService, private router:Router){
  
  }
  
  ngOnInit(): void{
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
    })
  }
  
  get f(){
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
    this.categoryservice.create(this.form.value).subscribe((res:any) => {
      alert("Category added successfully");
      this.router.navigateByUrl('category/list');
    })
    }
}
