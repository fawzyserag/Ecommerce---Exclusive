import { Component } from '@angular/core';
import { CategoryComponent } from "../../../../category/components/category/category.component";
import { MainSliderComponent } from "../../main-slider/main-slider.component";

@Component({
  selector: 'app-menu',
  imports: [CategoryComponent, MainSliderComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
