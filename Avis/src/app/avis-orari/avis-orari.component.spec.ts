import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisOrariComponent } from './avis-orari.component';

describe('AvisOrariComponent', () => {
  let component: AvisOrariComponent;
  let fixture: ComponentFixture<AvisOrariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisOrariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisOrariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
