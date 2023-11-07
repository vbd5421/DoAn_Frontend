import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { TypicalNumber } from 'src/app/core/model/typical-number/typical-number';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class TypicalNumberService {
  JSON_PATH = '../../assets/json/';
  constructor(private apiHelper: ApiHelper, private http : HttpClient ) { }

  getListAllPage(params:any):Observable<any>{
    return this.apiHelper.get( Constant.TYPICAL_NUMBER.GET_LIST_ALL_PAGE , {params})
  }

  getAllNumber(): Observable<any[]>{
    return this.apiHelper.get(Constant.TYPICAL_NUMBER.GET_ALL_NUMBER);
  }

  public getNumberById(id: number): Observable<any> {
    return this.apiHelper.get( Constant.TYPICAL_NUMBER.GET_NUMBER_BY_ID + `/${id}`);
  }

  public addNumber(number: TypicalNumber): Observable<Object> {
    return this.apiHelper.post( Constant.TYPICAL_NUMBER.ADD_NUMBER, number);
  }

  public updateNumber(number:TypicalNumber, id:number): Observable<Object> {
    return this.apiHelper.post(Constant.TYPICAL_NUMBER.UPDATE_NUMBER +`/${id}`, number);
  }

  public deleteNumber(id: number): Observable<any> {
    return this.apiHelper.post(Constant.TYPICAL_NUMBER.DELETE_NUMBER +`/${id}`);
  }
  getListIconJson(fileName : string) : Observable<any> {
    return this.http.get(this.JSON_PATH + fileName)
  }
}
