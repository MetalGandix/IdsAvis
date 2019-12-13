import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAccessoComponent } from './pagina-accesso.component';

describe('PaginaAccessoComponent', () => {
  let component: PaginaAccessoComponent;
  let fixture: ComponentFixture<PaginaAccessoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAccessoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAccessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
