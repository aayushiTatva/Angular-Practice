import { Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryDetailsComponent } from './category/category-details/category-details.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import { SupplierCreateComponent } from './supplier/supplier-create/supplier-create.component';
import { SupplierEditComponent } from './supplier/supplier-edit/supplier-edit.component';
import { SupplierDetailsComponent } from './supplier/supplier-details/supplier-details.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { OrderEditComponent } from './order/order-edit/order-edit.component';
import { OrderDetailsComponent } from './order/order-details/order-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'product/list', pathMatch: 'full'},
    {path: 'product/list' ,component: ProductListComponent},
    {path: 'product/create' ,component: ProductCreateComponent},
    {path: 'product/:productId/edit' ,component: ProductEditComponent},
    {path: 'product/:productId/detail' ,component: ProductDetailsComponent},

    {path: 'category/list' ,component: CategoryListComponent},
    {path: 'category/create' ,component: CategoryCreateComponent},
    {path: 'category/:categoryId/edit' ,component: CategoryEditComponent},
    {path: 'category/:categoryId/detail' ,component: CategoryDetailsComponent},

    {path: 'supplier/list' ,component: SupplierListComponent},
    {path: 'supplier/create' ,component: SupplierCreateComponent},
    {path: 'supplier/:supplierId/edit' ,component: SupplierEditComponent},
    {path: 'supplier/:supplierId/detail' ,component: SupplierDetailsComponent},

    {path: 'order/list' ,component: OrderListComponent},
    {path: 'order/create' ,component: OrderCreateComponent},
    {path: 'order/:orderId/edit' ,component: OrderEditComponent},
    {path: 'order/:orderId/detail' ,component: OrderDetailsComponent},
];
