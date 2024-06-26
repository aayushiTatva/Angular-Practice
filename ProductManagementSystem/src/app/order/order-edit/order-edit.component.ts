import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Order } from '../order';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-edit',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './order-edit.component.html',
  styleUrl: './order-edit.component.css'
})
export class OrderEditComponent {
  id!: number;
  order!: Order;
  form!: FormGroup;
  
  constructor(public orderservice: OrderService, private route:ActivatedRoute, private router:Router){
    
  }
  
  ngOnInit(): void{
    this.id = this.route.snapshot.params['orderId'];
    this.orderservice.find(this.id).subscribe((data:Order) =>{
      this.order = data;
    });

    this.form = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      deliveryDate: new FormControl('', [Validators.required]),
    });
  }
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
    this.orderservice.update(this.id, this.form.value).subscribe((res:any) =>{
      alert('Product edited successfully');
      this.router.navigateByUrl('product/list');
    })
  }
}
