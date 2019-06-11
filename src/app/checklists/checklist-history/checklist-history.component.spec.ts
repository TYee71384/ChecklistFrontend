import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistHistoryComponent } from './checklist-history.component';

describe('ChecklistHistoryComponent', () => {
  let component: ChecklistHistoryComponent;
  let fixture: ComponentFixture<ChecklistHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
