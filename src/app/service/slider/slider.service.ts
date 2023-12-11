import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from 'src/app/core/config/constant';
import { ApiHelper } from 'src/app/core/rest-api/api-helper';


@Injectable({
  providedIn: 'root'
})
export class SliderService {
  constructor(private apiHelper: ApiHelper) { }

  getListAll(): Observable<any>{
    return this.apiHelper.get(Constant.SLIDERS.GET_LIST_ALL);
  }

  getSliders(): Observable<any>{
    return this.apiHelper.get(Constant.SLIDERS.GET_SLIDERS);
  }

  addNew(slider: any): Observable<Object>{
    return this.apiHelper.post(Constant.SLIDERS.ADD, slider);
  }

  getById(id: number): Observable<any>{
    return this.apiHelper.get( Constant.SLIDERS.GET_BY_ID +`/${id}`);
  }

  update(id: number, slider: FormData):Observable<any>{
    return this.apiHelper.post( Constant.SLIDERS.UPDATE +`/${id}`,slider);
  }

  hideSlider(id: number): Observable<any>{
    return this.apiHelper.get( Constant.SLIDERS.HIDE_SLIDER + `/${id}`);
  }

  showSlider(id: number): Observable<any>{
    return this.apiHelper.get( Constant.SLIDERS.SHOW_SLIDER +`/${id}`);
  }

  deleteSlider(id: number): Observable<any>{
    return this.apiHelper.post( Constant.SLIDERS.DELETE_SLIDER +`/${id}`);
  }

  getImage(name: string): Observable<any>{
    return this.apiHelper.get( Constant.SLIDERS.GET_IMAGE +`/${name}`);
  }
}
