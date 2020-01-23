import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndamentoAnalisiComponent } from './andamento-analisi.component';

describe('AndamentoAnalisiComponent', () => {
  let component: AndamentoAnalisiComponent;
  let fixture: ComponentFixture<AndamentoAnalisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndamentoAnalisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndamentoAnalisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
