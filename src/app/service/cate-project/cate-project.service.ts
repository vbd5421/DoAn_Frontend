import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { CateProject } from 'src/app/core/model/cate-project/cate-project';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class CateProjectService {
  constructor(private apiHelper : ApiHelper) { }

  listPageSize(params:Params):Observable<any>{
    return this.apiHelper.get( Constant.CATE_PROJECT.LIST_PAGE_SIZE , {params})
  }
  listAllCate():Observable<any>{
    return this.apiHelper.get(Constant.CATE_PROJECT.LIST_ALL)
  }
  getCateByid(id:number):Observable<any>{
    return this.apiHelper.get( Constant.CATE_PROJECT.GET_BY_ID + `/${id}`)
  }

  addCategory( category: any ):Observable<any>{
    return this.apiHelper.post(Constant.CATE_PROJECT.CREATE , category)
  }

  deleteCate(id:number):Observable<any>{
    return this.apiHelper.post( Constant.CATE_PROJECT.DELETE  +`/${id}`)
  }

  updateCate(category:any):Observable<any>{
    return this.apiHelper.post( Constant.CATE_PROJECT.UPDATE ,category)
  }
}
