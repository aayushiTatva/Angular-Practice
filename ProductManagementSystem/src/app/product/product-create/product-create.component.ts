import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {

form!: FormGroup;
submit() {
  throw new Error('Method not implemented.');
  }
}
