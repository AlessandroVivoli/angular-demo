import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationBookingComponent } from './accommodation-booking.component';

describe('AccommodationBookingComponent', () => {
  let component: AccommodationBookingComponent;
  let fixture: ComponentFixture<AccommodationBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccommodationBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccommodationBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
