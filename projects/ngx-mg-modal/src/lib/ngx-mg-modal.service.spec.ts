import { TestBed } from '@angular/core/testing';

import { NgxMgModalService } from './ngx-mg-modal.service';

describe('NgxMgModalService', () => {
  let service: NgxMgModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMgModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
