import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Supplier } from '../supplier';
import { SupplierService } from '../supplier.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-supplier-details',
  standalone: true,
  imports: [RouterLink,MatCardModule,MatButtonModule,MatTableModule,CommonModule],
  templateUrl: './supplier-details.component.html',
  styleUrl: './supplier-details.component.css'
})
export class SupplierDetailsComponent {
  id!:number;
  supplier:Supplier = {} as Supplier;
  datasource = new MatTableDataSource<Supplier>();
  
  constructor(public supplierservice:SupplierService, private router:Router, private route:ActivatedRoute){}
  
  ngOnInit(){
    this.id = this.route.snapshot.params['supplierId'];
    console.log(this.id);
    this.supplierservice.find(this.id).subscribe((data:Supplier)=>{
      this.supplier = data;
      this.datasource.data = [this.supplier];
      console.log(this.supplier);
    })
  }
}
