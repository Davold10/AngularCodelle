import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  private lookfor:string ='';

  public FilteredProducts:any={};

  public loading:boolean=true;

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private pordutsservice:ProductsService) {
    this.activatedRoute.params.subscribe((lookforURL)=>{
      this.loading=true;
      this.lookfor=lookforURL.term;
      this.FilteredProducts = this.pordutsservice.SearchProducts(this.lookfor);
      this.loading=false;
    })
   }

  ngOnInit() {
  }

  public SendProductInfo(id){
    this.router.navigate(['productInfo',id])
  }

}
