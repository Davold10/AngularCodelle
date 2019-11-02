import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styles: []
})
export class ProductsMainComponent implements OnInit {

  public ReceivedProducts:Array<any>=[];

  public loading:boolean=true;

  constructor(private router:Router, public ProductsService:ProductsService) { }

  ngOnInit() {
    this.ReceivedProducts=this.ProductsService.ReturnProducts();
    setTimeout(()=>{
      this.loading=false;
    },500)
  }

  public SendProductInfo(id){
    this.router.navigate(['productInfo', id])
  }
  
}
