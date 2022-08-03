import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationBoxComponent } from './apartment-box.component';

describe('AccommodationBoxComponent', () => {
  let component: AccommodationBoxComponent;
  let fixture: ComponentFixture<AccommodationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccommodationBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccommodationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
