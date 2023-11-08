import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import { AdminControlComponent } from "../admin-control/admin-control.component";

const routes: Routes =[

  {path:'' , title:'Admin - Phòng thí nghiệm UAV-AI' , component: AdminControlComponent,

  children:[
    {path:'user' , loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
    {path:'typical-number' , loadChildren:()=>import('./typical-number/typical-number.module').then(m=>m.TypicalNumberModule)},
    {path:'typical-image' , loadChildren:()=>import('./typical-image/typical-image.module').then(m=>m.TypicalImageModule)},
    {path:'project' , loadChildren:()=>import('./project/project.module').then(m=>m.ProjectModule)},
    {path:'product' , loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)},
    {path:'member', loadChildren:()=>import('./member/member.module').then(m=>m.MemberModule)},
    {path:'news' , loadChildren:()=>import('./news/news.module').then(m=>m.NewsModule)},
    {path:'about-us' , loadChildren:()=>import('./about-us/about-us.module').then(m=>m.AboutUsModule)},

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