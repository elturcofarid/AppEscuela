import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaImgComponent } from './carga-img.component';

describe('CargaImgComponent', () => {
  let component: CargaImgComponent;
  let fixture: ComponentFixture<CargaImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
