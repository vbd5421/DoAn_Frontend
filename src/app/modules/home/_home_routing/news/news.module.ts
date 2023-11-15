import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from '../../posts/posts-list/posts-list.component';
import { PostsDetailComponent } from '../../posts/posts-detail/posts-detail.component';


const routes: Routes=[
  {path:'' ,component:PostsListComponent },
  {path:'chi-tiet' , component:PostsDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NewsModule { }
