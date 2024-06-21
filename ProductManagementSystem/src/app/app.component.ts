import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import { OrderListComponent } from './order/order-list/order-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,ProductListComponent,CategoryListComponent,SupplierListComponent,OrderListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductManagementSystem';
  loadedFeature = 'product';

onNavigate(feature: string){
  this.loadedFeature = feature;
  console.log(this.loadedFeature);
  console.log(feature);
}
}
