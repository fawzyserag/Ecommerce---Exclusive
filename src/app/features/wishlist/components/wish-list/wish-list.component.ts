import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../../cart/services/cart.service';
import { Wishlist } from '../../models/wishlist';
import { WishService } from '../../services/wish.service';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-wish-list',
  imports: [CurrencyPipe,UpperCasePipe],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
  count:number=0
  totalPrice:number=0;
  cartNumber!:number;
  wishList:Wishlist []=[];
  router: any;
  wishlsitId!:string
  constructor(private wishlsit:WishService,private _router:Router,private cart:CartService, private toastr: ToastrService){}
  getwishlsitproducts(){
    this.wishlsit.getProduct().subscribe({
      next:(res)=>{
        // this.totalPrice=res.data.totalwishlsitPrice;
        this.wishList=res.data;
        this.count=res.count
        console.log(res);
        this.wishlsitId=res.wishlsitId;
        // this.wishlsit.wishlsitNumber.next(res.numOfwishlsitItems);



      }
    })

  }
  addToCart(productId:string){
    this.cart.addProductToCart(productId).subscribe({
      next:(res)=>{
        this.toastr.success(res.message,'',{
        closeButton:true,
        progressBar:true,
        progressAnimation:'increasing'
      })

      console.log(res.message);
      this.cart.cartNumber.next(res.numOfCartItems);


      }

    })
  }

// updatewishlsit(productId:string,count:number){
//   this.wishlsit.updateProduct(productId,count).subscribe({
//     next:(res)=>{
//       console.log(res);
//       this.totalPrice=res.data.totalwishlsitPrice;
//         this.wishList=res.data.products;
//         this.wishlsit.wishlsitNumber.next(res.numOfwishlsitItems);


//     }
//   })
// }



clearAll(){
  this.wishlsit.clearwishlist().subscribe({
next:(res)=>{
  console.log(res)
  this.getwishlsitproducts()

}
  })

  }

removeitem(productId:string){
  this.wishlsit.removeProduct(productId).subscribe({
    next:(res)=>{
      this.totalPrice=res.data.totalwishlsitPrice;
      this.wishList=res.data.products;


    }
  })
}



  ngOnInit(): void {
   this.getwishlsitproducts()

  }
back(){
  this._router.navigate(['/home']);


}
}
