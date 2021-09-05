import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardTitleComponent } from './card-title/card-title.component';
import { CardBodyComponent } from './card-body/card-body.component';
import { CardFooterComponent } from './card-footer/card-footer.component';
import { CardTitleIconComponent } from './card-title-icon/card-title-icon.component';
import { CardIconComponent } from './card-icon/card-icon.component';



@NgModule({
  declarations: [
    CardComponent,
    CardTitleComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardTitleIconComponent,
    CardIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardTitleComponent,
    CardBodyComponent,
    CardFooterComponent,
    CardTitleIconComponent,
    CardIconComponent
  ]
})
export class CardModule { }
