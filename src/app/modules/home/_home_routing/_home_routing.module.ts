import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactHomeComponent } from "../contact/contact-home/contact-home.component";
import { AboutListComponent } from "../aboutus-home/about-list/about-list.component";
import { RoomsListComponent } from "../rooms/rooms-list/rooms-list.component";
import { SericeOurListComponent } from "../service-our/serice-our-list/serice-our-list.component";
import { BookingRoomListComponent } from "../booking/booking-room-list/booking-room-list.component";
import { RoomDetailComponent } from "../rooms/room-detail/room-detail.component";
import { LoginUserComponent } from "src/app/authentication/login-user/login-user.component";
import { SignUpComponent } from "src/app/authentication/sign-up/sign-up.component";
import { LoginAdminComponent } from "src/app/authentication/login-admin/login-admin.component";

const routes: Routes=[
    {path:'' , title:'Sun - Hotel' ,
    children:[
      {path:'trang-chu' ,loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule) },
       {path:'lien-he' , component:ContactHomeComponent},
       {path:'gioi-thieu' , component:AboutListComponent},
       {path:'phong' , component:RoomsListComponent},
       {path:'dich-vu' , component:SericeOurListComponent},
       {path:'tim-kiem' , component:BookingRoomListComponent},
       {path:'chi-tiet-phong' , component:RoomDetailComponent},
       {path:'admin/login', title:'Admin-Login' , component: LoginAdminComponent },
       {path: 'login', component: LoginUserComponent},
       {path: 'register', component:SignUpComponent},
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