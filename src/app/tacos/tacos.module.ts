import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TacosListComponent } from './tacos-list/tacos-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', component: TacosListComponent }
]

@NgModule({
  declarations: [
    TacosListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TacosModule { }
