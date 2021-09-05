import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./_card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('size') size: 'sm' | 'md' | 'lg' = 'sm';

  constructor() { }

  ngOnInit(): void {
  }

}
