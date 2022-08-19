import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccomodationsComponent } from './accomodations.component';


describe('AccomodationComponent', () => {
  let component: AccomodationsComponent;
  let fixture: ComponentFixture<AccomodationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomodationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomodationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
