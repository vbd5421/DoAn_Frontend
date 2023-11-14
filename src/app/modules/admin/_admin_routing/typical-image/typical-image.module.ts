import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TypicalImageControlComponent } from '../../typical-image/typical-image-control/typical-image-control.component';
import { TypicalImageAddComponent } from '../../typical-image/typical-image-add/typical-image-add.component';

const routes: Routes = [
  {path:'' , component: TypicalImageControlComponent},
  {path: 'add', component: TypicalImageAddComponent},
  {path:'edit/:id' , component: TypicalImageAddComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TypicalImageModule { }
