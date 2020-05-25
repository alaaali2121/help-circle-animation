import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCircleComponent } from './help-circle.component';

describe('HelpCircleComponent', () => {
  let component: HelpCircleComponent;
  let fixture: ComponentFixture<HelpCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
