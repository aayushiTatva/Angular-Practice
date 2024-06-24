import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, HttpClientModule,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
products: any=[];
apiUrl="http://localhost:5086/";

constructor(private http:HttpClient){};

ngOnInit(){
  this.getproducts();
}

getproducts(){
  this.http.get(this.apiUrl+"api/"+"CategoryController/"+"Get_Categories").subscribe((res) => {
    this.products=res;
  })
}
}
