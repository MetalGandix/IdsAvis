import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComeDonareComponent } from './come-donare.component';

describe('ComeDonareComponent', () => {
  let component: ComeDonareComponent;
  let fixture: ComponentFixture<ComeDonareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComeDonareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComeDonareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
