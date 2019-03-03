import { TestBed, inject } from '@angular/core/testing';

import { CargaImgService } from './carga-img.service';

describe('CargaImgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CargaImgService]
    });
  });

  it('should be created', inject([CargaImgService], (service: CargaImgService) => {
    expect(service).toBeTruthy();
  }));
});
