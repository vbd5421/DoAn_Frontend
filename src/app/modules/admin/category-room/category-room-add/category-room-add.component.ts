import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryRoom } from 'src/app/core/model/category-room/category-room';
import { CategoryRoomService } from 'src/app/service/category-room/category-room.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-category-room-add',
  templateUrl: './category-room-add.component.html',
  styleUrls: ['./category-room-add.component.css']
})
export class CategoryRoomAddComponent {

  formNumber = new FormGroup({
    numberic: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    icons: new FormControl('',Validators.required),
  });
  tNumber: CategoryRoom =new CategoryRoom()
  
  allIcon: any;


  constructor( ) {
  }

  onSubmit(){}

  rollbackToList(){
      window.history.back();
  }

}
