import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonareComponent } from './donare.component';

describe('DonareComponent', () => {
  let component: DonareComponent;
  let fixture: ComponentFixture<DonareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
