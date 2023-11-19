import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Product } from 'src/app/core/model/product/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  baseURL = Constant.BASE_URL;
  url:any;
  content:any;
  product: Product=new Product()

  constructor(private productService:ProductService, 
    private route:ActivatedRoute,
    private router: Router , 
    private domsanitizer:DomSanitizer){}

  ngOnInit(): void {
    this.getList()
  }
  getList(){
    // this.url= this.route.snapshot.params['url'];
    // // this.url = this.route.snapshot.queryParams['url'];
    // this.productService
  }
}
