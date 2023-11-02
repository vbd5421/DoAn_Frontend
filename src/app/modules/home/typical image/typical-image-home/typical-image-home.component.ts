import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typical-image-home',
  templateUrl: './typical-image-home.component.html',
  styleUrls: ['./typical-image-home.component.css']
})
export class TypicalImageHomeComponent implements OnInit {
  
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
