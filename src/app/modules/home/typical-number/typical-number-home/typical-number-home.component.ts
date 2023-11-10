import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { TypicalNumber } from 'src/app/core/model/typical-number/typical-number';
import { TypicalNumberService } from 'src/app/service/typical-number/typical-number.service';

@Component({
  selector: 'app-typical-number-home',
  templateUrl: './typical-number-home.component.html',
  styleUrls: ['./typical-number-home.component.css'],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({  transform: 'translateY(200%)',  opacity:0  })),
      state('active', style({ transform:'translateY(0)' , opacity:1 })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
  ]
})
export class TypicalNumberHomeComponent implements OnInit {
  animationState: string = 'inactive';
  @HostListener('window:scroll', ['$event'])
onWindowScroll(event: Event) {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  // Logic để xác định khi nào để kích hoạt animation, ví dụ:
  if (scrollPosition > 700) {
    this.animationState = 'active';
  } else {
    this.animationState = 'inactive';
  }
}
  number: TypicalNumber[] =[];
  paging = {
    page: 1,
    size: 3,
    totalRecord: 0
  }

 constructor( private numberService: TypicalNumberService) {}

  ngOnInit(): void {
    this.getAllNumber();
 }

 getRequestParams(page:number , pageSize:number):any{
    let params:any ={};
    if (page) {
      params[`pageNo`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }
    return params;
 }

getAllNumber(){
  const params = this.getRequestParams(this.paging.page, this.paging.size )
  this.numberService.getListAllPage(params).subscribe(data=>{
        this.number = data.content;
        this.paging.totalRecord= data.totalElements;
  },
   error=>{
    console.error(error)
  })
}




}
