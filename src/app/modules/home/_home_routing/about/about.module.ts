import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from 'src/app/authentication/error404/error404.component';
import { AboutUsComponent } from '../../aboutus-home/about-us/about-us.component';
import { AboutUsUavComponent } from '../../aboutus-home/about-us-uav/about-us-uav.component';

const routes: Routes=[
  {path:'' ,component:Error404Component},
  {path:'gioi-thieu-chung' , component:AboutUsComponent},
  {path:'iot' , component:AboutUsUavComponent},
  {path:'thanh-vien',loadChildren:()=>import('../member/member.module').then(m=>m.MemberModule)},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AboutModule { }
