import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'card-title-icon',
  templateUrl: './card-title-icon.component.html',
  styleUrls: ['./_card-title-icon.component.scss']
})
export class CardTitleIconComponent implements OnInit {

  @Input('size') size: 'sm' | 'md' | 'lg' = 'sm';

  constructor() { }

  ngOnInit(): void {
  }

}
