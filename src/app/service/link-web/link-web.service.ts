import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class LinkWebService {

  constructor(private apiHelper : ApiHelper) { }
  listPageWithSize(params:Params):Observable<any>{
    return this.apiHelper.get( Constant.LINK_WEB.LIST_PAGE_SIZE , {params})
  }
  listAll():Observable<any>{
    return this.apiHelper.get(Constant.LINK_WEB.GET_LIST_ALL)
  }
 getById(id:number):Observable<any>{
    return this.apiHelper.get(Constant.LINK_WEB.GET_ID + `/${id}`)
 }
  addLinkWeb( linkweb: any ):Observable<any>{
    return this.apiHelper.post(Constant.LINK_WEB.CREATE , linkweb)
  }

  deleteLinkWeb(id:number):Observable<any>{
    return this.apiHelper.post( Constant.LINK_WEB.DELETE  +`/${id}`)
  }

  updateLinkWeb(linkweb:any):Observable<any>{
    return this.apiHelper.post( Constant.LINK_WEB.UPDATE ,linkweb)
  }
}
