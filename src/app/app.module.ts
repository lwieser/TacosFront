import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
