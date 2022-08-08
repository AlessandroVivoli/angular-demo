import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccommodationFormComponent } from './my-accommodation-form.component';

describe('MyAccommodationFormComponent', () => {
  let component: MyAccommodationFormComponent;
  let fixture: ComponentFixture<MyAccommodationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccommodationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAccommodationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
