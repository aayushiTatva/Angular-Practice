import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './order-create.component.html',
  styleUrl: './order-create.component.css'
})
export class OrderCreateComponent {

}
