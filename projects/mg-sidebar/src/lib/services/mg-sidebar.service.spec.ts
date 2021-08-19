import { TestBed } from '@angular/core/testing';

import { MgSidebarService } from './mg-sidebar.service';

describe('SidebarService', () => {
  let service: MgSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MgSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
