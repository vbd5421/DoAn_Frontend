import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking-room-list',
  templateUrl: './booking-room-list.component.html',
  styleUrls: ['./booking-room-list.component.css']
})
export class BookingRoomListComponent {

  constructor(private router:Router){}

  searchRoom() {
    this.router.navigate(['/tim-kiem']);
  }
  roomDetail(){
    this.router.navigate(['/chi-tiet-phong'])
  }
  goback():void{
    window.history.back();
  }
}
