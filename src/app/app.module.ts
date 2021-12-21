import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';

const routes : Routes = [
  { path:'tacos', loadChildren: () => import('./tacos/tacos.module').then(x => x.TacosModule)},
  { path:'toppings', loadChildren: () => import('./toppings/toppings.module').then(x => x.ToppingsModule)}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ClarityModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
