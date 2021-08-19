import { TestBed } from '@angular/core/testing';

import { SetAtributosService } from './set-atributos.service';

describe('SetAtributosService', () => {
  let service: SetAtributosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetAtributosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
