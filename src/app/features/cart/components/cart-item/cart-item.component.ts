import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Cart, Product } from '../../models/cart.interface';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
@Input() product :Product = {} as Product
@Output() removeProduct = new EventEmitter<string>()
@Output() updateProductQty = new EventEmitter<{id:string,newCount:number}>()
onRemove(){
  this.removeProduct.emit(this.product.product._id)
}
onUpdateQty(newCount:number){
  this.updateProductQty.emit({id:this.product.product._id,newCount})
}
}
