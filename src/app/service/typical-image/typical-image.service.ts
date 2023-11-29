import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class TypicalImageService {

  constructor ( private apiHelper : ApiHelper) {  }

  // tImage
  getAllListChangePage(params: Params):Observable<any>{
    return this.apiHelper.get( Constant.TYPICAL_IMAGE.GET_ALL_LIST_CHANGE_PAGE , {params});
  }

  getListAll():Observable<any>{
    return this.apiHelper.get(Constant.TYPICAL_IMAGE.GET_LIST_ALL);
  }
addimageById(id:number):Observable<any>{
  return this.apiHelper.get( Constant.TYPICAL_IMAGE.ADD_IMAGE_BY_ID + `/${id}` )
}

getfindbyId(id:number):Observable<any>{
  return this.apiHelper.get( Constant.TYPICAL_IMAGE.GET_FIND_BY_ID + `/${id}`)
}

delete(id:number):Observable<any>{
  return this.apiHelper.post( Constant.TYPICAL_IMAGE.DELETE + `/${id}`)
}

update(id:number , typical_image: FormData):Observable<Object>{
  return this.apiHelper.post( Constant.TYPICAL_IMAGE.UPDATE + `/${id}` , typical_image )
}
// add
addtypical_image(formData: FormData): Observable<Object>{
  return this.apiHelper.post( Constant.TYPICAL_IMAGE.ADD_TYPICAL_IMAGE , formData);
}

hide(id: number): Observable<Object>{
  return this.apiHelper.get( Constant.TYPICAL_IMAGE.HIDE + `/${id}`);
}

show(id: number): Observable<Object>{
  return this.apiHelper.get( Constant.TYPICAL_IMAGE.SHOW + `/${id}`);
}
}
