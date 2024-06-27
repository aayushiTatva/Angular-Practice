import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [RouterLink,CommonModule,MatCardModule,MatButtonModule,MatTableModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {
  order: Order[]= [];

  constructor(public orderservice: OrderService){};
  
  ngOnInit(): void {
    this.orderservice.getAll().subscribe((data: Order[])=>{
      this.order = data;
      console.log(this.order);
    })  
  }
  
   deletePost(id: number){
    this.orderservice.delete(id).subscribe(res => {
      this.order = this.order.filter(item => item.id !== id);
      console.log("Product deleted successfully");
    })
   } 
}
