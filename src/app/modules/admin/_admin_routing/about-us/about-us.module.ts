import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutControlComponent } from '../../about/about-control/about-control.component';
import { AboutAddressComponent } from '../../about/about-address/about-address.component';


const routes: Routes = [
  {path:'' , component: AboutControlComponent},
  {path:'address-add' , component:AboutAddressComponent},
  {path:'address-edit/:id' , component:AboutAddressComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AboutUsModule { }
