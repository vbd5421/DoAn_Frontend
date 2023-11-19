import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LinkWebControlComponent } from '../../link-web/link-web-control/link-web-control.component';
import { LinkWebAddComponent } from '../../link-web/link-web-add/link-web-add.component';

const routes: Routes = [
  {path:'' , component: LinkWebControlComponent},
  {path: 'add', component: LinkWebAddComponent},
  {path:'edit/:id' , component: LinkWebAddComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class LinkWebModule { }
