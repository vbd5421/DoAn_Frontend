import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserControlComponent } from '../../user/user-control/user-control.component';
import { UserAddComponent } from '../../user/user-add/user-add.component';


const routes: Routes = [
  {path:'' , component: UserControlComponent},
  {path: 'add', component: UserAddComponent},
  {path: 'edit/:id', component: UserAddComponent},

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UserModule { }
