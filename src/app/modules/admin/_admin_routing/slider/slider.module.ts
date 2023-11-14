import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SliderControlComponent } from '../../slider/slider-control/slider-control.component';
import { SliderAddComponent } from '../../slider/slider-add/slider-add.component';

const routes: Routes = [
  {path:'' , component: SliderControlComponent},
  {path: 'add', component: SliderAddComponent},
  {path:'edit/:id' , component: SliderAddComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class SliderModule { }
