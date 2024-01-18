import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  
  constructor( private apiHelper: ApiHelper ) { }

  getListCommentwithPageAdmin(paramsQuery : Params):Observable<any>{
    return this.apiHelper.get( Constant.COMMENT.GET_LIST_COMMENT_WITH_PAGE_ADMIN , {params:paramsQuery})
  }

  getCommentChildByParent():Observable<any>{
    return this.apiHelper.get(Constant.COMMENT.GET_COMMENT_CHILD_BY_PARENT)
  }

  getCommentChildByParentAdmin():Observable<any>{
    return this.apiHelper.get(Constant.COMMENT.GET_COMMENT_CHILD_BY_PARENT_ADMIN)
  }

  getParentCommentActive():Observable<Comment[]>{
    return this.apiHelper.get(Constant.COMMENT.GET_PARENT_COMMENT_ACTIVE)
  }
  getParentCmtAdmin():Observable<any>{
    return this.apiHelper.get(Constant.COMMENT.GET_PARENTCMT_ADMIN)
  }

  getListCommentHome():Observable<any>{
   return this.apiHelper.get(Constant.COMMENT.GET_LIST_COMMENT_HOME)
  }
  getListAll():Observable<Comment[]>{
    return this.apiHelper.get(Constant.COMMENT.GET_LIST_ALL)
  }

  DisableComment(id : number){
    return this.apiHelper.get(Constant.COMMENT.DISABLE_COMMENT + `/${id}`)
  }
  EnableComment(id : number){
    return this.apiHelper.get( Constant.COMMENT.ENABLE_COMMENT + `/${id}`)
  }
  creatComment(creatcomment: any):Observable<Object>{
    return this.apiHelper.post( Constant.COMMENT.CREAT_COMMENT  , creatcomment)
  }
  updateComment(id:number , comment:Comment):Observable<Object>{
    return this.apiHelper.post(  Constant.COMMENT.UPDATE_COMMENT + `/${id}` , comment )
  }

  getCommentByProjectId(projectId : number):Observable<any>{
    return this.apiHelper.get( Constant.COMMENT.GET_COMMENT_BY_POST_ID + `/test?projectId=${projectId}`)
  }

  deleteComment(id:number){
  return this.apiHelper.post(Constant.COMMENT.DELETE_COMMENT + `/${id}` )  
  }
}
