import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectControlComponent } from '../../project/project-control/project-control.component';
import { ProjectAddComponent } from '../../project/project-add/project-add.component';


const routes: Routes = [
  {path:'' , component: ProjectControlComponent},
  {path: 'add', component: ProjectAddComponent},
  {path:'edit/:id' , component: ProjectAddComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ProjectModule { }
