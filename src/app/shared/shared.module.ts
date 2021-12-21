import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericListComponent } from './generic-list/generic-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { GenericFormComponent } from './generic-form/generic-form.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GenericListComponent,
    GenericFormComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports:[
    GenericListComponent
  ]
})
export class SharedModule { }
