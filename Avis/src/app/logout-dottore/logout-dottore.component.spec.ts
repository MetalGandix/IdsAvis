import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutDottoreComponent } from './logout-dottore.component';

describe('LogoutDottoreComponent', () => {
  let component: LogoutDottoreComponent;
  let fixture: ComponentFixture<LogoutDottoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutDottoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutDottoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
