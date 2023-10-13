import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes=[
    //home
    {path:'' , redirectTo:'/trang-chu', pathMatch:'full'},
    {path:'' ,loadChildren:()=>import('./modules/home/_home_routing/_home_routing.module').then(m=>m.HomeRouting)},
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule{}