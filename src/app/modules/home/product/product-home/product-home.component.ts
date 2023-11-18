import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Product } from 'src/app/core/model/product/product';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css'],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({  transform: 'translateY(-60%)' , opacity:0  })),
      state('active', style({ transform:'translateY(0)' ,opacity:1  })),
      transition('inactive => active', animate('600ms ease-in')),
      transition('active => inactive', animate('600ms ease-out'))
    ]),
  ]
})
export class ProductHomeComponent {
  animationState: string = 'inactive';
  @HostListener('window:scroll', ['$event'])
onWindowScroll(event: Event) {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  // Logic để xác định khi nào để kích hoạt animation, ví dụ:
  if (scrollPosition > 1940) {
    this.animationState = 'active';
  } else {
    this.animationState = 'inactive';
  }
}

products: Product[] = [];
totalPages: number;
searchInput = '';
baseURL = Constant.BASE_URL;
productURL = Domain.PRODUCT;
paging = {
  page: 1,
  size: 5,
  totalRecord: 0
}
constructor(private router: Router,
  private auth: AuthService, 
  private productService: ProductService) {
}
ngOnInit(): void {
  this.getProductListAllwithPage();
}
getRequestParams(page: number, pageSize: number, search: string): any {
  let params: any = {};

  if (page) {
    params[`pageNo`] = page;
  }

  if (pageSize) {
    params[`pageSize`] = pageSize;
  }

  if (search) {
    params[`name`] = search;
  }
  return params;
}
getProductListAllwithPage(){
  const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchInput)
  this.productService.getListAllPage(params).subscribe(data => {
    this.products = data.content;
    this.paging.totalRecord = data.totalElements;
    this.totalPages = data.totalPages;
    console.log('sản phẩm home' , this.products)
  },
    error => {
      console.log(error);
    }
  )
}

}
