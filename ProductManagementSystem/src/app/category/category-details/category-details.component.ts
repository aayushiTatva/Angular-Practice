import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent {
  id!:number;
  category!:Category;
  
  constructor(public categoryservice:CategoryService, private router:Router, private route:ActivatedRoute){}
  
  ngOnInit(){
    this.id = this.route.snapshot.params['categoryId'];
    console.log(this.id);
    this.categoryservice.find(this.id).subscribe((data:Category)=>{
      this.category = data;
      console.log(this.category);
    })
  }
}
