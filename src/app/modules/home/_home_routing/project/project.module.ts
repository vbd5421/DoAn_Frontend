import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from '../../project/project-list/project-list.component';
import { ProjectDetailComponent } from '../../project/project-detail/project-detail.component';
import { Error404Component } from 'src/app/authentication/error404/error404.component';

const routes: Routes=[
  //{path:'' ,component:Error404Component},
  {path:'' ,component:ProjectListComponent },
  {path:':url' , component:ProjectDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProjectModule { }
