import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

import { MgSidebarComponent } from "./components/sidebar/mg-sidebar.component";
import { SidebarNavigationComponent } from "./components/sidebar-navigation/sidebar-navigation.component";
import { LogoComponent } from './components/logo/logo.component';


@NgModule({
  declarations: [
    MgSidebarComponent,
    SidebarNavigationComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    MgSidebarComponent
  ]
})
export class MgSidebarModule { }
