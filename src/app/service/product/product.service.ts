import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { Product } from 'src/app/core/model/product/product';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor( private apiHelper:ApiHelper) { }
  getListAllPage(params?:Params):Observable<any>{
    return this.apiHelper.get( Constant.PRODUCT.GET_LIST_ALL_WITH_PAGE , {params})
  }

  addProduct(product: any): Observable<any>{
    return this.apiHelper.post(Constant.PRODUCT.ADD_PRODUCT, product);
  }
  getProductById(id:number): Observable<any>{
    return this.apiHelper.get( Constant.PRODUCT.GET_ID + `/${id}`);
  }

  updateProduct(id: number, product: any): Observable<any>{
    return this.apiHelper.post( Constant.PRODUCT.UPDATE_PRODUCT + `/${id}`, product);
  }

  deleteProduct(id: number): Observable<any>{
    return this.apiHelper.post( Constant.PRODUCT.DELETE_PRODUCT +`/${id}`);
  }
  getProductByUrl(url:any):Observable<Product>{
    return this.apiHelper.get(Constant.PRODUCT.GET_URL + `/${url}`)
  }
}
