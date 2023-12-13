import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { User } from 'src/app/core/model/user/user';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private apiHelper:ApiHelper ) { }

  getListAllwithpageUser(params:any):Observable<any>{
    return this.apiHelper.get( Constant.USER.GET_LIST_ALL_WITH_PAGE_USER , {params})
  }

   getUserById(id:number):Observable<any>{
    return this.apiHelper.get( Constant.USER.GET_USER_BY_ID +`/${id}`);
  }


   deleteUser(id: number): Observable<any> {
    return this.apiHelper.post(Constant.USER.DELETE_USER + `/${id}`);
  }
  updateUser(id: number, user:User):Observable<Object>{
    return this.apiHelper.post(Constant.USER.UPDATE_USER+`/${id}`,user);
  }

  changePassword(id: number):Observable<any>{
    return this.apiHelper.post( Constant.USER.CHANGE_PASSWORD ,id);
  }
}
