import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { TypicalImage } from 'src/app/core/model/typical-image/typical-image';
import { TypicalImageService } from 'src/app/service/typical-image/typical-image.service';

@Component({
  selector: 'app-typical-image-home',
  templateUrl: './typical-image-home.component.html',
  styleUrls: ['./typical-image-home.component.css'],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({  opacity:0  })),
      state('active', style({ opacity:1  })),
      transition('inactive => active', animate('600ms ease-in')),
      transition('active => inactive', animate('600ms ease-out'))
    ]),
  ]
})
export class TypicalImageHomeComponent implements OnInit {
  animationState: string = 'inactive';
  @HostListener('window:scroll', ['$event'])
onWindowScroll(event: Event) {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  // Logic để xác định khi nào để kích hoạt animation, ví dụ:
  if (scrollPosition > 2400) {
    this.animationState = 'active';
  } else {
    this.animationState = 'inactive';
  }
}
   
constructor(
  private typicalimageService: TypicalImageService,
) { }

  ngOnInit(): void {
    this.getListAll()
  }

  imgTypical: TypicalImage[] = [];
  tImageURL = Domain.TYPICAL_IMAGE;
  baseURL = Constant.BASE_URL;
  
 getListAll(){
  this.typicalimageService.getListAll().subscribe(data=>{
    this.imgTypical = data
  })
 }
  
}
