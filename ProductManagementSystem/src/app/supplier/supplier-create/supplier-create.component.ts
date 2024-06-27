import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SupplierService } from '../supplier.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-supplier-create',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,MatCardModule,MatButtonModule,
    MatFormFieldModule,MatInputModule],
  templateUrl: './supplier-create.component.html',
  styleUrl: './supplier-create.component.css'
})
export class SupplierCreateComponent {
  form!: FormGroup;

  constructor(public supplierservice: SupplierService, private router:Router){
  
  }
  
  ngOnInit(): void{
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [Validators.required])
    })
  }
  
  get f(){
    return this.form.controls;
  }
  submit() {
    console.log(this.form.value);
    this.supplierservice.create(this.form.value).subscribe((res:any) => {
      alert("Supplier added successfully");
      this.router.navigateByUrl('supplier/list');
    })
    }
}
