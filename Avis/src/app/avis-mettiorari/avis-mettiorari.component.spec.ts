import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisMettiorariComponent } from './avis-mettiorari.component';

describe('AvisMettiorariComponent', () => {
  let component: AvisMettiorariComponent;
  let fixture: ComponentFixture<AvisMettiorariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisMettiorariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisMettiorariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
