import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CateProjectControlComponent } from '../../cate-project/cate-project-control/cate-project-control.component';
import { CateProjectAddComponent } from '../../cate-project/cate-project-add/cate-project-add.component';

const routes: Routes = [
  {path:'' , component: CateProjectControlComponent},
  {path: 'add', component: CateProjectAddComponent},
  {path:'edit/:id' , component: CateProjectAddComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CateProjectModule { }
