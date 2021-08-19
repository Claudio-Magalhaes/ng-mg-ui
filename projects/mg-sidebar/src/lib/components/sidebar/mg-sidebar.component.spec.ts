import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgSidebarComponent } from './mg-sidebar.component';

describe('SidebarComponent', () => {
  let component: MgSidebarComponent;
  let fixture: ComponentFixture<MgSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MgSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
