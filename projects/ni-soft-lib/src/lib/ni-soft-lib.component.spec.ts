import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiSoftLibComponent } from './ni-soft-lib.component';

describe('NiSoftLibComponent', () => {
  let component: NiSoftLibComponent;
  let fixture: ComponentFixture<NiSoftLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiSoftLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiSoftLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
