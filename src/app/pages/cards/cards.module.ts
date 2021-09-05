import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import {CardModule, NgxMgUiModule} from 'ngx-mg-ui';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    CardsComponent
  ],
    imports: [
        CommonModule,
        CardModule,
        MatIconModule
    ]
})
export class CardsModule { }
