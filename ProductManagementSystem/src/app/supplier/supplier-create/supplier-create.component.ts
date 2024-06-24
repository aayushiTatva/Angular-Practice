import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-supplier-create',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './supplier-create.component.html',
  styleUrl: './supplier-create.component.css'
})
export class SupplierCreateComponent {

}
