import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CategoryRoomControlComponent } from '../../category-room/category-room-control/category-room-control.component';
import { CategoryRoomAddComponent } from '../../category-room/category-room-add/category-room-add.component';

const routes: Routes=[
  {path:'' , component:CategoryRoomControlComponent },
  {path:'add' , component:CategoryRoomAddComponent},
  {path:'update/:id', component:CategoryRoomAddComponent}
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class CategoryRoomModule { }
