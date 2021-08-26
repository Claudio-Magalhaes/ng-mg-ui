import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMgModalComponent } from './ngx-mg-modal.component';

describe('NgxMgModalComponent', () => {
  let component: NgxMgModalComponent;
  let fixture: ComponentFixture<NgxMgModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMgModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMgModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
