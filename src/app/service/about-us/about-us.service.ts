import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { AboutUs } from 'src/app/core/model/about-us/about-us';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';

@Injectable({
  providedIn: 'root'
})
export class AboutUsService {

  constructor(private apiHelper:ApiHelper ) { }


  createInformation(about: AboutUs){
      return this.apiHelper.post(Constant.ABOUT.CREATE , about)
  }

  getByIdAbout(id: number):Observable<any>{
      return this.apiHelper.get(Constant.ABOUT.GETID+`/${id}`)
  }

 getAllInformation():Observable<any>{
    return this.apiHelper.get(Constant.ABOUT.LIST)
 }

 getAllInforHome():Observable<any>{
  return this.apiHelper.get(Constant.ABOUT.LIST)
  // .pipe(
  //   tap(res=> console.log('about' + JSON.stringify(res) )),
  //   catchError( () => of([]) )
  // )
 }
}
