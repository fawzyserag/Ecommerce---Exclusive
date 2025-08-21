import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductInterface } from '../../product/models/product-interface';

@Component({
  selector: 'app-our-product',
  imports: [RouterLink],
  templateUrl: './our-product.component.html',
  styleUrl: './our-product.component.css',
})
export class OurProductComponent {
  @Input() product!: ProductInterface;
  @Output() addToCart = new EventEmitter<string>();
  onAddToCart() {
    this.addToCart.emit(this.product._id);
  }
}
