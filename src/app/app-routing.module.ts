import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404Component } from "./authentication/error404/error404.component";
import { AuthenticateService } from "./authentication/authenticate.service";

const routes: Routes=[
    //home
    {path:'' , redirectTo:'/trang-chu', pathMatch:'full'},
    {path:'' ,loadChildren:()=>import('./modules/home/_home_routing/_home_routing.module').then(m=>m.HomeRouting)},
    //admin
    {path:'admin' , redirectTo:'admin/category-room' , pathMatch:'full'},
    {path:'admin' ,canActivate:[AuthenticateService] , loadChildren:()=> import('./modules/admin/_admin_routing/admin.module').then(m=>m.AdminModule) },
    //{path:'admin' , canActivate:[AuthenticateService] , loadChildren:()=> import('./modules/admin/_admin_routing/admin.module').then(m=>m.AdminModule) },
    { path: '**', redirectTo: '/404' },
    {path: '404' , component:Error404Component},
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule{}