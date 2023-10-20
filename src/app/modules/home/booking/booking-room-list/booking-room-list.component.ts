import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking-room-list',
  templateUrl: './booking-room-list.component.html',
  styleUrls: ['./booking-room-list.component.css']
})
export class BookingRoomListComponent {

  constructor(private router:Router){}
  //mã ACII
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    const input = event.target ; // Lấy đối tượng input
    if (input.value.length >= 1) {
      // alert('')
    return false;
    }
    return true;
  }
  searchRoom() {
    this.router.navigate(['/tim-kiem']);
  }
  roomDetail(){
    this.router.navigate(['/chi-tiet-phong'])
  }
}
