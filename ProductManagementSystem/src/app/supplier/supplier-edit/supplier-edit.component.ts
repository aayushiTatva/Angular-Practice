import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Supplier } from '../supplier';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SupplierService } from '../supplier.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier-edit',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './supplier-edit.component.html',
  styleUrl: './supplier-edit.component.css'
})
export class SupplierEditComponent {
  id!: number;
  supplier!: Supplier;
  form!: FormGroup;
  
  constructor(public supplierservice: SupplierService, private route:ActivatedRoute, private router:Router){
    
  }
  
  ngOnInit(): void{
    this.id = this.route.snapshot.params['supplierId'];
    this.supplierservice.find(this.id).subscribe((data:Supplier) =>{
      this.supplier = data;
    });
  
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      contactNumber: new FormControl('', [Validators.required])
    });
  }
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
    this.supplierservice.update(this.id, this.form.value).subscribe((res:any) =>{
      alert('Product edited successfully');
      this.router.navigateByUrl('supplier/list');
    })
  }
}
