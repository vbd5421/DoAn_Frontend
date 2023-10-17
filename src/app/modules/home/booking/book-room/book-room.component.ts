import { Component } from '@angular/core';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent {

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
}
