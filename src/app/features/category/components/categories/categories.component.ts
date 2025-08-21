import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../../interface/category';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {
  constructor(private category:CategoryService,private tost:ToastrService,){}
  categoryList:Category[]=[];
  ngOnInit(): void {
   this.getallOf()
  }
  getallOf(){
   this.category.getAllcategory().subscribe({
     next:(res)=>{
       this.categoryList=res.data;
       console.log(res);
     }
   })
  }
}
