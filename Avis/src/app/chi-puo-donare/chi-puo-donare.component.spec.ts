import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiPuoDonareComponent } from './chi-puo-donare.component';

describe('ChiPuoDonareComponent', () => {
  let component: ChiPuoDonareComponent;
  let fixture: ComponentFixture<ChiPuoDonareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiPuoDonareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiPuoDonareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
