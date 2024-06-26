import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Order } from '../order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent {
  id!:number;
  order!:Order;
  
  constructor(public orderservice:OrderService, private router:Router, private route:ActivatedRoute){}
  
  ngOnInit(){
    this.id = this.route.snapshot.params['orderId'];
    console.log(this.id);
    this.orderservice.find(this.id).subscribe((data:Order)=>{
      this.order = data;
      console.log(this.order);
    })
  }
}
