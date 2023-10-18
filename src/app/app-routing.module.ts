import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Error404Component } from "./authentication/error404/error404.component";

const routes: Routes=[
    //home
    {path:'' , redirectTo:'/trang-chu', pathMatch:'full'},
    {path:'' ,loadChildren:()=>import('./modules/home/_home_routing/_home_routing.module').then(m=>m.HomeRouting)},




    
  { path: '**', redirectTo: '/404' },
  {path: '404' , component:Error404Component},
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule{}