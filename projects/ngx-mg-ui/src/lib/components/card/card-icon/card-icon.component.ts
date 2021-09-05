import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./_card-icon.component.scss']
})
export class CardIconComponent implements OnInit {

  @Input('size') size: 'sm' | 'md' | 'lg' = 'sm';

  constructor() { }

  ngOnInit(): void {
  }

}
