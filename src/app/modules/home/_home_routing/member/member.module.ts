import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from '../../member/member-list/member-list.component';
import { MemberDetailComponent } from '../../member/member-detail/member-detail.component';

const routes: Routes=[
  {path:'' ,component:MemberListComponent },
  {path:':url' , component:MemberDetailComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MemberModule { }
