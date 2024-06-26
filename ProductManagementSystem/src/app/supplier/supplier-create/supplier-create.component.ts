import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-create',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
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
