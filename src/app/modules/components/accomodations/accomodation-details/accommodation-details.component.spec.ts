import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationDetailsComponent as AccomodationDetailsComponent } from './accomodation-details.component';

describe('AccomodationDetailsComponent', () => {
  let component: AccomodationDetailsComponent;
  let fixture: ComponentFixture<AccomodationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomodationDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomodationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
