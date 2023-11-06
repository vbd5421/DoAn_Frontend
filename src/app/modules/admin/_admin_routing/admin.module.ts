import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import { AdminControlComponent } from "../admin-control/admin-control.component";

const routes: Routes =[

  {path:'' , title:'Admin - Phòng thí nghiệm UAV-AI' , component: AdminControlComponent,

  children:[
    {path:'user' , loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
    {path:'typical-number' , loadChildren:()=>import('./typical-number/typical-number.module').then(m=>m.TypicalNumberModule)},
    // {path:'typical-image'}

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