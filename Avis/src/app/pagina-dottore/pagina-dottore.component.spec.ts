import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDottoreComponent } from './pagina-dottore.component';

describe('PaginaDottoreComponent', () => {
  let component: PaginaDottoreComponent;
  let fixture: ComponentFixture<PaginaDottoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaDottoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDottoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
