import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxMgUiModule } from 'ngx-mg-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MgSidebarModule } from "mg-sidebar";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HomeModule} from "./pages/home/home.module";
import {CardsModule} from "./pages/cards/cards.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MgSidebarModule.forRoot({ backgroundImage: { image: '/assets/img/sidebar/sidebar.jpg' } }),
    NgbModule,
    HomeModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
