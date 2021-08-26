import { TestBed } from '@angular/core/testing';

import { NgxMgInterceptorsHttpService } from './ngx-mg-interceptors-http.service';

describe('NgxMgInterceptorsHttpService', () => {
  let service: NgxMgInterceptorsHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMgInterceptorsHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
