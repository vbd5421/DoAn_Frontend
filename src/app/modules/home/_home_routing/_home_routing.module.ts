import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoomsHomeComponent } from "../rooms/rooms-home/rooms-home.component";

const routes: Routes=[
    {path:'' , title:'Sun - Hotel' ,
    children:[
        {path:'trang-chu' ,loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule) },
       
      ]
  }
]

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })


  export class HomeRouting{}