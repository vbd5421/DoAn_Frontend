import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Product } from 'src/app/core/model/product/product';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.css']
})
export class ProductControlComponent {
  products: Product[] = [];
  currentIndex = -1;
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

  getProductListAllwithPage(){
    
  }
  search(): void {
    this.paging.page = 1;
    this.getProductListAllwithPage();
  }
  updateProduct(id: number) {
    return this.router.navigate(['admin/product/update', id]);
  }
  deleteProduct(id: number) {
    let option = confirm("Bạn có chắc chắn xóa khách hàng này?");
    if (option) {
      this.productService.deleteProduct(id).subscribe(data => {
        this.getProductListAllwithPage();
      })
    }
  }
}