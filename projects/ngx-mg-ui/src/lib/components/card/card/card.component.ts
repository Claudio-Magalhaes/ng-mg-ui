import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mg-card',
  templateUrl: './card.component.html',
  styleUrls: ['./_card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('size') size: 'sm' | 'md' | 'lg' = 'sm';

  @Input('sm') sm?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' = '12';
  @Input('md') md?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' = '12';
  @Input('lg') lg?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' = '12';
  @Input('xl') xl?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' = '12';

  constructor() { }

  ngOnInit(): void {
  }

}
