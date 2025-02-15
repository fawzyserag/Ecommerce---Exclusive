import { Component } from '@angular/core';
import { ProductListComponent } from "../../../product/components/product-list/product-list.component";
import { CategoryComponent } from "../../../category/components/category/category.component";
import { MainSliderComponent } from "../main-slider/main-slider.component";
import { MenuComponent } from "../menu/menu/menu.component";
import { FooterComponent } from "../../../../shared/components/footer/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [ProductListComponent, MainSliderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
