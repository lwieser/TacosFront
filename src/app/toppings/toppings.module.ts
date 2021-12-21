import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToppingsListComponent } from './toppings-list/toppings-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  { path:'', component: ToppingsListComponent }
]

@NgModule({
  declarations: [
    ToppingsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ToppingsModule { }
