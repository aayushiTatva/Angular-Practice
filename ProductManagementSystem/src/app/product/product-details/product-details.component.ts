import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink,MatCardModule,MatButtonModule,MatTableModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
id!:number;
product:Product = {} as Product;
datasource = new MatTableDataSource<Product>();

constructor(public productservice:ProductService, private router:Router, private route:ActivatedRoute){}

ngOnInit(){
  this.id = this.route.snapshot.params['productId'];
  console.log(this.id);
  this.productservice.find(this.id).subscribe((data:Product)=>{
    this.product = data;
    this.datasource.data = [this.product];
    console.log(this.product);
  })
}
}
