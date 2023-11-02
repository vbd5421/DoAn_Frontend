import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from 'src/app/authentication/error404/error404.component';

const routes: Routes=[
  {path:'' ,component:Error404Component},
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
