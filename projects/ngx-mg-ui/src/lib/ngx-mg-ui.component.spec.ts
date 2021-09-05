import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMgUiComponent } from './ngx-mg-ui.component';

describe('NgxMgUiComponent', () => {
  let component: NgxMgUiComponent;
  let fixture: ComponentFixture<NgxMgUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMgUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMgUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
