import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIdentificationInfoComponent } from './page-identification-info.component';

describe('PageIdentificationInfoComponent', () => {
  let component: PageIdentificationInfoComponent;
  let fixture: ComponentFixture<PageIdentificationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageIdentificationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIdentificationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
