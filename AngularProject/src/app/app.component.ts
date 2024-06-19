import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularPath';

  constructor(private router:Router){}

  onLoadView(){
    this.router.navigate(["/view"]);
  }
}
