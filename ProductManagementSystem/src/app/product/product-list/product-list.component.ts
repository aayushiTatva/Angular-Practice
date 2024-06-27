import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, HttpClientModule,CommonModule,MatCardModule,MatButtonModule,MatTableModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
products: Product[]= [];

constructor(public productservice: ProductService){};

ngOnInit(): void {
  this.productservice.getAll().subscribe((data: Product[])=>{
    this.products = data;
    console.log(this.products);
  })  
}

 deletePost(id: number){
  this.productservice.delete(id).subscribe(res => {
    this.products = this.products.filter(item => item.id !== id);
    console.log("Product deleted successfully");
  })
 } 
}