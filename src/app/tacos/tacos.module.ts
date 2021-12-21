import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';
import { TacosListComponent } from './tacos-list/tacos-list.component';
import { TacosDetailsComponent } from './tacos-details/tacos-details.component';

const routes: Routes = [
  { path:'', component: TacosListComponent },
  { path:':id', component: TacosDetailsComponent },
]

@NgModule({
  declarations: [
    TacosListComponent,
    TacosDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class TacosModule { }
