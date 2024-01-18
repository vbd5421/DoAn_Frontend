import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { Project } from 'src/app/core/model/project/project';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor( private apiHelper:ApiHelper) { }
  getListAllPage(params?:any):Observable<any>{
    return this.apiHelper.get( Constant.PROJECT.GET_LIST_ALL_WITH_PAGE , {params})
  }

  addProject(project: any): Observable<any>{
    return this.apiHelper.post(Constant.PROJECT.ADD_PROJECT, project);
  }
  getId(id:number): Observable<Project>{
    return this.apiHelper.get(Constant.PROJECT.GET_ID+`/${id}`)
  }
  updateProject(id: number, project: any): Observable<any>{
    return this.apiHelper.post( Constant.PROJECT.UPDATE_PROJECT + `/${id}`, project);
  }

  deleteProject(id: number): Observable<any>{
    return this.apiHelper.post( Constant.PROJECT.DELETE_PROJECT +`/${id}`);
  }
  getByUrl(url:any):Observable<Project>{
    return this.apiHelper.get(Constant.PROJECT.GET_URL + `/${url}`)
  }
}
