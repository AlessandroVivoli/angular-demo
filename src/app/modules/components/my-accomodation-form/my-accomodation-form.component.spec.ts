import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccomodationFormComponent } from './my-accomodation-form.component';

describe('MyAccomodationFormComponent', () => {
  let component: MyAccomodationFormComponent;
  let fixture: ComponentFixture<MyAccomodationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccomodationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAccomodationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
