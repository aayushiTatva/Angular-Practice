import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
id!:number;
product!:Product;

constructor(public productservice:ProductService, private router:Router, private route:ActivatedRoute){}

ngOnInit(){
  this.id = this.route.snapshot.params['productId'];
  console.log(this.id);
  this.productservice.find(this.id).subscribe((data:Product)=>{
    this.product = data;
    console.log(this.product);
  })
}
}
