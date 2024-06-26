import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {

form!: FormGroup;

constructor(public productservice: ProductService, private router:Router){

}

ngOnInit(): void{
  this.form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    inStock: new FormControl('', [Validators.required]),
    supplierId: new FormControl('', [Validators.required]),
    categoryId: new FormControl('', [Validators.required])
  })
}

get f(){
  return this.form.controls;
}
submit() {
  console.log(this.form.value);
  this.productservice.create(this.form.value).subscribe((res:any) => {
    alert("Product added successfully");
    this.router.navigateByUrl('product/list');
  })
  }
}
