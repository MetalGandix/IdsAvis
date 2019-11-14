import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDonazioneComponent } from './info-donazione.component';

describe('InfoDonazioneComponent', () => {
  let component: InfoDonazioneComponent;
  let fixture: ComponentFixture<InfoDonazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDonazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDonazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
