import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistStepDetailsComponent } from './checklist-step-details.component';

describe('ChecklistStepDetailsComponent', () => {
  let component: ChecklistStepDetailsComponent;
  let fixture: ComponentFixture<ChecklistStepDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistStepDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistStepDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
