import { Component } from '@angular/core';
import { TypicalImage } from '../../../../core/model/typical-image/typical-image';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Router } from '@angular/router';
import { TypicalImageService } from 'src/app/service/typical-image/typical-image.service';

@Component({
  selector: 'app-typical-image-control',
  templateUrl: './typical-image-control.component.html',
  styleUrls: ['./typical-image-control.component.css']
})
export class TypicalImageControlComponent {
  typicalimageList : TypicalImage[]=[];
  tImageURL = Domain.TYPICAL_IMAGE;
  baseURL = Constant.BASE_URL;
  target = {
    url: '',
    id: 0,
    name: '',
    active:'',
    caption: '',
    description: ''
  };

  paging = {
    page: 1,
    size: 16,
    totalRecord: 0
  }

 constructor(private router : Router,
              private typicalimageService: TypicalImageService,
              ){}
  ngOnInit(): void {
   this.getListAllWithpage()
  }

getRequestParam(page:number , pageSize: number ):any{
  let params:any={};
  if(page ){
    params[`pageNo`] = page;
  }

  if (pageSize) {
    params[`pageSize`] = pageSize;
  }
  return params;
}

getListAllWithpage():void{
   const params = this.getRequestParam(this.paging.page, this.paging.size)
   this.typicalimageService.getAllListChangePage(params).subscribe(res=>{
     this.typicalimageList = res.content;
     this.paging.totalRecord = res.totalElements;
    this.pick(this.typicalimageList[0])
   }, error =>{console.log(error);
   } )
}

getListAll():void{
  this.typicalimageService.getListAll().subscribe(res=>{
    this.typicalimageList= res;
  })
}


handlepagechange(event : number):void{
  console.log(event);
  this.paging.page =event;
  this.getListAllWithpage();
}
handlePageSizeChange(event: any): void {
  this.paging.size = event;
  this.paging.page = 1;
  console.log(event, this.paging.size)
  this.getListAllWithpage();
}

pick(e:any){
  this.target.url = this.baseURL+e.image.pathUrl;
  this.target.name = e.image.name;
  this.target.id= e.id;
  this.target.caption=e.caption;
  // this.target.id = e.id;
  this.target.active = e.active;
  this.target.description = e.description;

}

updatetypicalimage(id:number){
  return this.router.navigate([`admin/tImage/update/${id}` ])
}

deleteimg(id:number){
  let option = confirm("Ảnh sẽ bị xóa!")
  if(option){
    this.typicalimageService.delete(id).subscribe(()=>{
      this.getListAllWithpage();
    })
  }
}



hideimg(id: number){
  // this.typicalimageService.hide(id).subscribe(() =>{
  //   this.getListAllWithpage();
  // })
}

showimg(id: number){
  // this.typicalimageService.show(id).subscribe(() =>{
  //   this.getListAllWithpage();
  // })
}

}
