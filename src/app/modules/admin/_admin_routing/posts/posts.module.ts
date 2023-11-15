import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostControlComponent } from '../../posts/post-control/post-control.component';
import { PostAddComponent } from '../../posts/post-add/post-add.component';

const routes: Routes = [
  {path:'' , component: PostControlComponent},
  {path: 'add', component: PostAddComponent},
  {path:'edit/:id' , component: PostAddComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PostsModule { }
