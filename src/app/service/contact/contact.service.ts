import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private apiHelper: ApiHelper) {
  }

  listAllsizePage(params:any ):Observable<any>{
    return this.apiHelper.get( Constant.CONTACT.LIST_ALL_SIZE_PAGE , { params  }  )
    // .pipe(
    //   tap(contact => console.log(`data_json = ${JSON.stringify(contact)}`)),
    //   catchError( () => of([]) )
    //    )
  }

  AddContact(contactform : any):Observable<any>{
    return this.apiHelper.post(Constant.CONTACT.ADD_CONTACT, contactform)
  }


  Delete(id:number):Observable<any>{
    return this.apiHelper.post( Constant.CONTACT.DELETE + `/${id}` )
  }

  Contacted(id:number):Observable<any>{
    return this.apiHelper.get( Constant.CONTACT.CONTACTED +`/${id}`)
  }
  NotContact(id:number):Observable<any>{
    return this.apiHelper.get(Constant.CONTACT.NOTCONTACT + `/${id}`)
  }

}
