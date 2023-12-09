import { Component } from '@angular/core';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Product } from 'src/app/core/model/product/product';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-more',
  templateUrl: './product-more.component.html',
  styleUrls: ['./product-more.component.css']
})
export class ProductMoreComponent {
  productUrl = Domain.PRODUCT;
  baseURL = Constant.BASE_URL;
  productList: Product[] = [];
  randomNumber = Math.floor(Math.random() * 2) ;
  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.getListAll();
    this.shuffleItems();
  }
  
  paging = {
    page: 1,
    size: 4,
    totalRecord: 0
  }

  getListAll(){
    this.productService.getListAllPage().subscribe(data=>{
      this.productList=data.content
    })
  }

  shuffleItems() {
    let counter = this.productList.length;

    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      [this.productList[counter], this.productList[index]] = [
        this.productList[index],
        this.productList[counter],
      ];
    }
  }
}
