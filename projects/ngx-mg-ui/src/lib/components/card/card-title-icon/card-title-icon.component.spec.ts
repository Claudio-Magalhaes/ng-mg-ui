import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTitleIconComponent } from './card-title-icon.component';

describe('CardTitleIconComponent', () => {
  let component: CardTitleIconComponent;
  let fixture: ComponentFixture<CardTitleIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTitleIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTitleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
