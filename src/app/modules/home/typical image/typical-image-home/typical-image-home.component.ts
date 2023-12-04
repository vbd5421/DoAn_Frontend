import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';

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
  
  constructor() {}
  ngOnInit(): void {}
  imgTypical=[
    {
      src:'assets/images/blog/blog-1.jpg',
      title:'tiêu đề tiêu đề'
    },
    {
      src:'assets/images/blog/blog-2.jpg',
      title:'tiêu đề 1'
    },
    {
      src:'assets/images/blog/blog-3.jpg',
      title:'tiêu đề 14'
    },
    {
      src:'assets/images/utc-uav-ai/andreas-rasmussen-C8UjCsWp3Go-unsplash.jpg',
      title:'tiêu đề 13'
    },
    {
      src:'assets/images/blog/blog-5.jpg',
      title:'tiêu đề 12'
    },
    {
      src:'assets/images/utc-uav-ai/img-uav.jpg',
      title:'tiêu đề 11'
    }
  ]
}
