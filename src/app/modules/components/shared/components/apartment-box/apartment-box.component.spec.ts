import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentBoxComponent } from './apartment-box.component';

describe('ApartmentBoxComponent', () => {
  let component: ApartmentBoxComponent;
  let fixture: ComponentFixture<ApartmentBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
