import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  constructor(private apiHelper:ApiHelper) {}

  getRolebyId(id:number):Observable<any>{
    return this.apiHelper.get(Constant.ROLE.GET_ROLE_BY_ID + `/${id}`);
  }

  listRole():Observable<any>{
    return this.apiHelper.get(Constant.ROLE.LIST_ROLE);
  }
}
