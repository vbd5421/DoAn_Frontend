import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiceOurControlComponent } from '../../service-our/service-our-control/service-our-control.component';
import { ServiceOurAddComponent } from '../../service-our/service-our-add/service-our-add.component';


const routes: Routes=[
  {path:'' , component:ServiceOurControlComponent },
  {path:'add' , component:ServiceOurAddComponent},
  {path:'update/:id', component:ServiceOurAddComponent}
  ]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ServiceOurModule { }
