import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MemberControlComponent } from '../../member/member-control/member-control.component';
import { MemberAddComponent } from '../../member/member-add/member-add.component';

const routes: Routes = [
  {path:'' , component: MemberControlComponent},
  {path: 'add', component: MemberAddComponent},
  {path:'edit/:id' , component: MemberAddComponent},
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MemberModule { }
