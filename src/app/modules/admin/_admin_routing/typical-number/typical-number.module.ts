import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TypicalNumControlComponent } from '../../typical-number/typical-num-control/typical-num-control.component';
import { TypicalNumAddComponent } from '../../typical-number/typical-num-add/typical-num-add.component';

const routes: Routes = [
  {path:'' , component: TypicalNumControlComponent},
  {path: 'add', component: TypicalNumAddComponent},
  {path:'edit/:id' , component: TypicalNumAddComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TypicalNumberModule { }
