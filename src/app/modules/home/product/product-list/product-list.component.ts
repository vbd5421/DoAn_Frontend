import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Product } from 'src/app/core/model/product/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  baseURL = Constant.BASE_URL;
  productURL = Domain.PRODUCT;
  productList:Product[]=[];
  paging = {
    page: 1,
    size: 9,
    totalRecord: 0
  }
  constructor(private router:Router,
      private productService:ProductService){}

ngOnInit(): void {
    this.getListAllWithPage()
}
getRequestParams(page:number , pageSize:number):any{
  let params:any ={};
  if (page) {
    params[`pageNo`] = page;
  }

  if (pageSize) {
    params[`pageSize`] = pageSize;
  }
  return params;
}
getListAllWithPage():void{
  const params = this.getRequestParams(this.paging.page , this.paging.size);
  this.productService.getListAllPage(params).subscribe(res=>{
    this.productList= res.content;
    this.paging.totalRecord = res.totalElements
    console.log(this.productList)
  }, 
  er=>{
    console.error(er);
  })
}
handlePageChange(event: number): void {
  this.paging.page = event;
  this.getListAllWithPage();
}
}
