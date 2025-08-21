import { Component } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { Brand } from '../../interface/brand';

@Component({
  selector: 'app-brand-list',
  imports: [],
  templateUrl: './brand-list.component.html',
  styleUrl: './brand-list.component.css'
})
export class BrandListComponent {
constructor(private brands:BrandService){}
  id:any;
  brandsList:Brand[]=[];
  ngOnInit(): void {
    this.getallOf()
  }
  getallOf(){
    this.brands.getAllbrands().subscribe({
      next:(res)=>{
        this.brandsList=res.data
      }
    })

  }

}
