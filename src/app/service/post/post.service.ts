import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { Posts } from 'src/app/core/model/posts/posts';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor( private apiHelper:ApiHelper) { }
  getListAllPage(params:Params):Observable<any>{
    return this.apiHelper.get( Constant.POSTS.GET_LIST_ALL_WITH_PAGE, {params})
  }
  getPostById(id:number):Observable<any>{
    return this.apiHelper.get(Constant.POSTS.GET_ID + `/${id}`)
  }
  getPostByUrl(url: any): Observable<Posts>{
    return this.apiHelper.get( Constant.POSTS.GET_POST_BY_URL + `/${url}`);
  }
  getListAll():Observable<any>{
    return this.apiHelper.get(Constant.POSTS.LIST_ALL)
  }
  addPosts(posts: any): Observable<any>{
    return this.apiHelper.post(Constant.POSTS.ADD_POST, posts);
  }

  updatePosts(id: number, posts: any): Observable<any>{
    return this.apiHelper.post( Constant.POSTS.UPDATE_POST + `/${id}`, posts);
  }

  deletePosts(id: any): Observable<any>{
    return this.apiHelper.post( Constant.POSTS.DELETE_POST +`/${id}`);
  }
}
