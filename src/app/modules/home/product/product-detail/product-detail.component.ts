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
  id:any;
  content:any;
  product: Product=new Product()

  constructor(private productService:ProductService, 
    private route:ActivatedRoute,
    private router: Router , 
    private sanitizer:DomSanitizer){}

  ngOnInit(): void {
    this.getList()
  }
  getList(){
    this.url = this.route.snapshot.params['url'];
    this.productService.getProductByUrl(this.url).subscribe(data => {
      this.product = data;
      // console.log(data)
      document.title = this.product.title;
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.product.content);
    })
  }
}
