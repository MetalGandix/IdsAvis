import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisiSangueListComponent } from './analisi-sangue-list.component';

describe('AnalisiSangueListComponent', () => {
  let component: AnalisiSangueListComponent;
  let fixture: ComponentFixture<AnalisiSangueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalisiSangueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalisiSangueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
