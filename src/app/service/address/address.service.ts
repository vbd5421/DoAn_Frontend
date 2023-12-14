import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { Address } from 'src/app/core/model/address/address';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = '../../../assets/json/local.json';

  constructor(  private apiHelper: ApiHelper , private httpClient: HttpClient) { }

  createAddress( address : any ):Observable<any>{
    return this.apiHelper.post(Constant.ADDRESS.CREATE,address);
  }

  ListAll():Observable<Address[]>{
    return this.apiHelper.get(Constant.ADDRESS.LIST);
  }

  updateAddress( id:number,  address: any): Observable<Object>{
    return this.apiHelper.post(Constant.ADDRESS.UPDATE +`/${id}`, address);
  }
  getById(id: number): Observable<any>{
    return this.apiHelper.get(Constant.ADDRESS.GET_ID+`/${id}`)
  }

  deleteAddress(id:number):Observable<Object>{
    return this.apiHelper.post(Constant.ADDRESS.DELETE+`/${id}`)
  }

  getLocation(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}`);
  }


}
