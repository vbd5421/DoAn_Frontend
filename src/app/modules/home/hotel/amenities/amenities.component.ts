import { Component } from '@angular/core';

@Component({
  selector: 'app-amenities',
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.css']
})
export class AmenitiesComponent {

  hightLine=[
    {
      id:1,
      urlImg:'assets/images/hightline/location.svg',
      des:'trung tâm hà nội',
    },
    {
      id:2,
      urlImg:'assets/images/hightline/like.svg',
      des:'thích hợp cho các hoạt động',
    },
    {
      id:3,
      urlImg:'assets/images/hightline/hotel.svg',
      des:'mới sửa sang',
    },
    {
      id:4,
      urlImg:'assets/images/hightline/SafetyFeatures.svg',
      des:'an toàn sạch sẽ',
    },
  ]

  tienNghi=[
    {
      id:1,
      des:'bồn nước tắm',
    },
    {
      id:2,
      des:'đưa đón sân bay',
    },
    {
      id:3,
      des:'wifi miễn phí cho tất cả các phòng',
    },
    {
      id:4,
      des:'đưa đón sân bay',
    },
    {
      id:5,
      des:'đưa đón sân bay',
    },
    {
      id:6,
      des:'wifi miễn phí cho tất cả các phòng',
    },
    {
      id:7,
      des:'đưa đón sân bay',
    },
  ]

}
