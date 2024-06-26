import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier-list',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.css'
})
export class SupplierListComponent {
  supplier: Supplier[]= [];

  constructor(public supplierservice: SupplierService){};
  
  ngOnInit(): void {
    this.supplierservice.getAll().subscribe((data: Supplier[])=>{
      this.supplier = data;
      console.log(this.supplier);
    })  
  }
  
   deletePost(id: number){
    this.supplierservice.delete(id).subscribe(res => {
      this.supplier = this.supplier.filter(item => item.id !== id);
      console.log("Product deleted successfully");
    })
   } 
}
