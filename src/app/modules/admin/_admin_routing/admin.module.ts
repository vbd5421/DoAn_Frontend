import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import { AdminControlComponent } from "../admin-control/admin-control.component";

const routes: Routes =[

  {path:'' , title:'Admin - Sun Hotel' , component: AdminControlComponent,

  children:[
    {path: 'category-room' , title:'Admin-Loại phòng' , loadChildren:()=>import('./category-room/category-room.module').then(m=>m.CategoryRoomModule)},
    {path:'dich-vu' , title:'Admin-Dịch vụ' , loadChildren:()=>import('./service-our/service-our.module').then(m=>m.ServiceOurModule) },
     
    ]},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class AdminModule{}