import { TestBed } from '@angular/core/testing';

import { NgxMgUiService } from './ngx-mg-ui.service';

describe('NgxMgUiService', () => {
  let service: NgxMgUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMgUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
