import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-create',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,MatCardModule,MatButtonModule,
    MatFormFieldModule,MatInputModule],
  templateUrl: './order-create.component.html',
  styleUrl: './order-create.component.css'
})
export class OrderCreateComponent {

  form!: FormGroup;

  constructor(public orderservice: OrderService, private router:Router){
  
  }
  
  ngOnInit(): void{
    this.form = new FormGroup({
      product: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
    })
  }
  
  get f(){
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
    this.orderservice.create(this.form.value).subscribe((res:any) => {
      alert("Order added successfully");
      this.router.navigateByUrl('order/list');
    })
    }
}
