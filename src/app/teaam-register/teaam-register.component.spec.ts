import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaamRegisterComponent } from './teaam-register.component';

describe('TeaamRegisterComponent', () => {
  let component: TeaamRegisterComponent;
  let fixture: ComponentFixture<TeaamRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaamRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaamRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
