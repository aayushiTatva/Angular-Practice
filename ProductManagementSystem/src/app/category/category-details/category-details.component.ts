// import { Component } from '@angular/core';
// import { ActivatedRoute, Router, RouterLink } from '@angular/router';
// import { Category } from '../category';
// import { CategoryService } from '../category.service';
// import { MatTableDataSource, MatTableModule } from '@angular/material/table';
// import { MatButtonModule } from '@angular/material/button';
// import { MatCardModule } from '@angular/material/card';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-category-details',
//   standalone: true,
//   imports: [RouterLink,MatCardModule,MatButtonModule,MatTableModule,CommonModule],
//   templateUrl: './category-details.component.html',
//   styleUrl: './category-details.component.css'
// })
// export class CategoryDetailsComponent {
//   id!:number;
  // category!:Category;
  // datasource = new MatTableDataSource<any>();
  
//   constructor(public categoryservice:CategoryService, private router:Router, private route:ActivatedRoute){}
  
//   ngOnInit(){
//     this.id = this.route.snapshot.params['categoryId'];
//     console.log(this.id);
//     this.categoryservice.find(this.id).subscribe((data:Category)=>{
//       this.category = data;
//       this.datasource.data = [this.category];
//       console.log(this.category);
//     })
//   }
// }
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Category } from '../category';
import { CategoryService } from '../category.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [RouterLink, MatCardModule, MatButtonModule, MatTableModule, CommonModule],
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {
  id!: number;
  category: Category = {} as Category;
  datasource = new MatTableDataSource<Category>();

  constructor(public categoryservice: CategoryService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['categoryId'];
    console.log(this.id);
    this.categoryservice.find(this.id).subscribe((data: Category) => {
      this.category = data;
      this.datasource.data = [this.category];
      console.log(this.category);
    });
  }
}

