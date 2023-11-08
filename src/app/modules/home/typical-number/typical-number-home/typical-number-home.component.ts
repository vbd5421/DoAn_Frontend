import { Component, OnInit } from '@angular/core';
import { TypicalNumber } from 'src/app/core/model/typical-number/typical-number';
import { TypicalNumberService } from 'src/app/service/typical-number/typical-number.service';

@Component({
  selector: 'app-typical-number-home',
  templateUrl: './typical-number-home.component.html',
  styleUrls: ['./typical-number-home.component.css']
})
export class TypicalNumberHomeComponent implements OnInit {
  number: TypicalNumber[] =[];
  searchInput='';
  paging = {
    page: 1,
    size: 3,
    totalRecord: 0
  }

 constructor( private numberService: TypicalNumberService) {}

  ngOnInit(): void {
    this.getAllNumber();
 }

 getRequestParams(page:number , pageSize:number, search : string):any{
    let params:any ={};
    if (page) {
      params[`pageNo`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if(search){
      params[`search`] = search;
    }
    return params;
 }

getAllNumber(){
  const params = this.getRequestParams(this.paging.page, this.paging.size , this.searchInput)
  this.numberService.getListAllPage(params).subscribe(data=>{
        this.number = data.content;
        this.paging.totalRecord= data.totalElements;
  },
   error=>{
    console.error(error)
  })
}


handlePageChange(event: number): void {
  console.log(event);
  this.paging.page = event;
  this.getAllNumber();
}
handlePageSizeChange(event: any): void {
  this.paging.size = event;
  this.paging.page = 1;
  console.log(event, this.paging.size)
  this.getAllNumber();
}

}
