import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationBookingComponent } from './accommodation-booking.component';

describe('AccommodationBookingComponent', () => {
  let component: AccomodationBookingComponent;
  let fixture: ComponentFixture<AccomodationBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomodationBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomodationBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
