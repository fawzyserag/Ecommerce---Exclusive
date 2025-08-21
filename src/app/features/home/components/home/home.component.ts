import { Component } from '@angular/core';
import { ProductListComponent } from "../../../product/components/product-list/product-list.component";
import { MainSliderComponent } from "../main-slider/main-slider.component";
import { FooterComponent } from "../../../../shared/components/footer/footer/footer.component";
import { BestSellingComponent } from "../../../best-selling/best-selling/best-selling.component";
import { AdvertiseComponent } from "../../../advertise/advertise/advertise.component";
import { OurProductComponent } from "../../../ourproduct/our-product/our-product.component";
import { NewComponent } from "../../../new-arrival/new/new.component";
import { OptionsComponent } from "../../../delivery/options/options.component";
import { CategoriesComponent } from "../../../category/components/categories/categories.component";

@Component({
  selector: 'app-home',
  imports: [ProductListComponent, MainSliderComponent, FooterComponent, BestSellingComponent, AdvertiseComponent, OurProductComponent, NewComponent, OptionsComponent, CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
