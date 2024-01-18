import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactHomeComponent } from "../contact/contact-home/contact-home.component";
import { LoginUserComponent } from "src/app/authentication/login-user/login-user.component";
import { SignUpComponent } from "src/app/authentication/sign-up/sign-up.component";
import { LoginAdminComponent } from "src/app/authentication/login-admin/login-admin.component";
import { SearchComponent } from "../../another/search/search.component";
import { HomeComponent } from "../home/home.component";


const routes: Routes=[
    {path:'' , title:'IOT',
    children:[
      {path:'' , redirectTo:'trang-chu', pathMatch:'full'},
      {path:'trang-chu' , component:HomeComponent },
      {path:'tin-tuc' , loadChildren:()=>import('./news/news.module').then(m=>m.NewsModule)},
      {path:'gioi-thieu' , loadChildren:()=>import('./about/about.module').then(m=>m.AboutModule)},
      {path:'blog' , loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)},
      {path:'du-an' , loadChildren:()=>import('./project/project.module').then(m=>m.ProjectModule)},
      {path:'tim-kiem' , component:SearchComponent },
       {path:'lien-he' , component:ContactHomeComponent},
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
