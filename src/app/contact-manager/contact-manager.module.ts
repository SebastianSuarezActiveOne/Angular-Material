import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactManagerComponent } from './contact-manager.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { MaterialModule } from "../shared/material.module";
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ContactManagerComponent,
    children: [
      { path: '', component: MainContentComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactManagerComponent, ToolbarComponent, MainContentComponent, SidenavComponent]
})
export class ContactManagerModule { }
