import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  public ProductInfo;any={};


  constructor(private router:Router, private activatedRoute:ActivatedRoute, private productsService:ProductsService) {
    const idProduct = this.activatedRoute.snapshot.paramMap.get('id');
    this.ProductInfo=productsService.SelectProduct(idProduct)
  }

  ngOnInit() {
  }

}
