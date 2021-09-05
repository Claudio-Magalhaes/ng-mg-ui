import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: 'mg-card'
})
export class CardSizeDirective {

  constructor(el: ElementRef) {
    if (el.nativeElement.attributes.sm) {
      console.log(el.nativeElement.classList.add(`col-sm-${el.nativeElement.attributes.sm.value}`));
    }
    if (el.nativeElement.attributes.md) {
      console.log(el.nativeElement.classList.add(`col-md-${el.nativeElement.attributes.md.value}`));
    }
    if (el.nativeElement.attributes.lg) {
      console.log(el.nativeElement.classList.add(`col-lg-${el.nativeElement.attributes.lg.value}`));
    }
    if (el.nativeElement.attributes.xl) {
      console.log(el.nativeElement.classList.add(`col-xl-${el.nativeElement.attributes.xl.value}`));
    }
  }

  public teste(){}
}
