import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisPageComponent } from './avis-page.component';

describe('AvisPageComponent', () => {
  let component: AvisPageComponent;
  let fixture: ComponentFixture<AvisPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
