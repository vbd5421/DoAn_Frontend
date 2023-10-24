import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import { AdminControlComponent } from "../admin-control/admin-control.component";

const routes: Routes =[

  {path:'' , title:'Admin - Sun Hotel' , component: AdminControlComponent,

  children:[
    {path: 'category-room' , title:'Admin-Ecoit' , loadChildren:()=>import('./category-room/category-room.module').then(m=>m.CategoryRoomModule)},
    
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