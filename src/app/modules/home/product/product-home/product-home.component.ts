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
  if (scrollPosition > 1760) {
    this.animationState = 'active';
  } else {
    this.animationState = 'inactive';
  }
}

products: Product[] = [];

baseURL = Constant.BASE_URL;
productURL = Domain.PRODUCT;

constructor( 
  private productService: ProductService) {
}
ngOnInit(): void {
  this.getProductListAllwithPage();
}

getProductListAllwithPage(){
  this.productService.getListAllPage().subscribe(data => {
    this.products = data.content;
    
  },
    error => {
      console.log(error);
    }
  )
}

}
