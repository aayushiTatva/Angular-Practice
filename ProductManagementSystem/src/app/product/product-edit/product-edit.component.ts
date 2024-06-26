import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Category } from '../../category/category';
import { CategoryService } from '../../category/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
id!: number;
product!: Product;
form!: FormGroup;
category: Category[]= [];

constructor(public productservice: ProductService, private route:ActivatedRoute, private router:Router,
  public categoryservice: CategoryService){
  
}

ngOnInit(): void{
  this.id = this.route.snapshot.params['productId'];
  this.productservice.find(this.id).subscribe((data:Product) =>{
    this.product = data;
  });

  this.categoryservice.getAll().subscribe((data: Category[])=>{
    this.category = data;
    console.log(this.category);
  }) 

  this.form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    inStock: new FormControl('', [Validators.required]),
    supplierId: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required]),
    categoryName: new FormControl('', [Validators.required])
  });
}

get f(){
  return this.form.controls;
}

submit(){
  console.log(this.form.value);
  this.productservice.update(this.id, this.form.value).subscribe((res:any) =>{
    alert('Product edited successfully');
    this.router.navigateByUrl('product/list');
  })
}
}
