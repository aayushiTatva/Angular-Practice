import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './supplier-details.component.html',
  styleUrl: './supplier-details.component.css'
})
export class SupplierDetailsComponent {
  id!:number;
  supplier!:Supplier;
  
  constructor(public supplierservice:SupplierService, private router:Router, private route:ActivatedRoute){}
  
  ngOnInit(){
    this.id = this.route.snapshot.params['supplierId'];
    console.log(this.id);
    this.supplierservice.find(this.id).subscribe((data:Supplier)=>{
      this.supplier = data;
      console.log(this.supplier);
    })
  }
}
