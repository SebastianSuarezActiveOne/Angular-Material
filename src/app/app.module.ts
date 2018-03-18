import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'contact-manager', loadChildren: './contact-manager/contact-manager.module#ContactManagerModule' },
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
  { path: '**', redirectTo: 'contact-manager' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
