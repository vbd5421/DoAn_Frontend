import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Product } from 'src/app/core/model/product/product';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ProductService } from 'src/app/service/product/product.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-product-control',
  templateUrl: './product-control.component.html',
  styleUrls: ['./product-control.component.css']
})
export class ProductControlComponent {
  products: Product[] = [];
  searchInput = '';
  baseURL = Constant.BASE_URL;
  productURL = Domain.PRODUCT;
  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }
  constructor(private router: Router,
    private productService: ProductService ,
      private toastr:ToastService) {
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
      console.log('sản phẩm' , this.products)
    },
      error => {
        console.log(error);
      }
    )
  }
  search(): void {
    this.paging.page = 1;
    this.getProductListAllwithPage();
  }
  handlePageChange(event: number): void {
    console.log(event);
    this.paging.page = event;
    this.getProductListAllwithPage();
  }
  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    console.log(event, this.paging.size)
    this.getProductListAllwithPage();
  }
  updateProduct(id: number) {
    return this.router.navigate([`admin/product/edit/${id}`]);
  }
  deleteProduct(id: number) {
    let option = confirm("Bạn có chắc chắn xóa khách hàng này?");
    if (option) {
      this.productService.deleteProduct(id).subscribe(data => {
        this.getProductListAllwithPage();
        this.toastr.showDelete();
      })
    }
  }
}