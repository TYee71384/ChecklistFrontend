import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUpdateInfoComponent } from './edit-update-info.component';

describe('EditUpdateInfoComponent', () => {
  let component: EditUpdateInfoComponent;
  let fixture: ComponentFixture<EditUpdateInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUpdateInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUpdateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
