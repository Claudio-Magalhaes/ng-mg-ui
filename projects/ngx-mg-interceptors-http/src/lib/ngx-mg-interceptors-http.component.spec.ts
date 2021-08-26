import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMgInterceptorsHttpComponent } from './ngx-mg-interceptors-http.component';

describe('NgxMgInterceptorsHttpComponent', () => {
  let component: NgxMgInterceptorsHttpComponent;
  let fixture: ComponentFixture<NgxMgInterceptorsHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMgInterceptorsHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMgInterceptorsHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
