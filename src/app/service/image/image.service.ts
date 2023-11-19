import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  
  constructor(private apiHelper :ApiHelper) { }

  downloadFile(file: any): Observable<Object>{
    return this.apiHelper.post(Constant.IMAGE.DOWNLOAD_FILE ,file, {observe: "response", responseType: "blob"});
  }

  addImage(formData: FormData): Observable<any>{
    return this.apiHelper.post( Constant.IMAGE.ADD_IMAGE ,formData);

  }

  deleteFile(file:any ){
    return this.apiHelper.post( Constant.IMAGE.DELETE_FILE , file);
  }

  getFileById(id: number): Observable<any>{
    return this.apiHelper.get(Constant.IMAGE.GET_FILE_BY_ID + `/${id}`);
  }

  getAllImage(): Observable<any>{
    return this.apiHelper.get(Constant.IMAGE.GET_ALL_IMAGE);
  }

  updateImage(file: any): Observable<Object>{
    return this.apiHelper.post( Constant.IMAGE.UPDATE_IMAGE , file);
  }

  getlistallwithpage(paramsQuery: Params): Observable<any>{
    return this.apiHelper.get( Constant.IMAGE.GET_LISTALL_WITH_PAGE , {params: paramsQuery});
  }

  getListAll():Observable<any>{
    return this.apiHelper.get(Constant.IMAGE.GET_LIST_ALL)
  }
}
