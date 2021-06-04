import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingScoreComponent } from './gaming-score.component';

describe('GamingScoreComponent', () => {
  let component: GamingScoreComponent;
  let fixture: ComponentFixture<GamingScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamingScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
