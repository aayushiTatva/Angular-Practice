import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  category: Category[]= [];

  constructor(public categoryservice: CategoryService){};
  
  ngOnInit(): void {
    this.categoryservice.getAll().subscribe((data: Category[])=>{
      this.category = data;
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
