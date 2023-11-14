import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { Member } from 'src/app/core/model/member/member';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  constructor( private apiHelper:ApiHelper) { }
  getListAllPage(params?:Params):Observable<any>{
    return this.apiHelper.get( Constant.MEMBER.GET_LIST_ALL_WITH_PAGE , {params})
  }
  getId(id:number):Observable<any>{
    return this.apiHelper.get(Constant.MEMBER.GET_ID + `${id}`)
  }
  addMember(member: any): Observable<any>{
    return this.apiHelper.post(Constant.MEMBER.ADD_MEMBER, member);
  }

  updateMember(id: number, member: any): Observable<any>{
    return this.apiHelper.post( Constant.MEMBER.UPDATE_MEMBER + `/${id}`, member);
  }

  deleteMember(id: any): Observable<any>{
    return this.apiHelper.post( Constant.MEMBER.DELETE_MEMBER +`/${id}`);
  }
}
