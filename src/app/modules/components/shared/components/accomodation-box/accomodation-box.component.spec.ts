import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccomodationBoxComponent } from './accomodation-box.component';

describe('AccomodationBoxComponent', () => {
  let component: AccomodationBoxComponent;
  let fixture: ComponentFixture<AccomodationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomodationBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomodationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
