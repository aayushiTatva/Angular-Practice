import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Output() featureSelected = new EventEmitter<string>();

onLoad(feature: string){
  this.featureSelected.emit(feature);
  console.log(this.featureSelected);
  console.log(feature);
}
}
