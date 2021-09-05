import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./_card-title.component.scss']
})
export class CardTitleComponent implements OnInit {

  @Input('size') size: 'sm' | 'md' | 'lg' = 'sm';

  constructor() { }

  ngOnInit(): void {
  }

}
