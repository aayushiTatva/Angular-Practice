import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterLink, CommonModule,MatRadioModule,MatCardModule, MatTableModule,MatButtonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  category: Category[]= [];
  datasource = new MatTableDataSource<any>();

  constructor(public categoryservice: CategoryService){};
  
  ngOnInit(): void {
    this.categoryservice.getAll().subscribe((data: Category[])=>{
      this.category = data;
      this.datasource.data = this.category;
      console.log(this.category);
    })  
  }
  
   deletePost(id: number){
    this.categoryservice.delete(id).subscribe(res => {
      this.category = this.category.filter(item => item.id !== id);
      console.log("Product deleted successfully");
    })
   } 
}
