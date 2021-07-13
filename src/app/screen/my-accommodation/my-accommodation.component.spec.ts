import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccommodationComponent } from './my-accommodation.component';

describe('MyAccommodationComponent', () => {
  let component: MyAccommodationComponent;
  let fixture: ComponentFixture<MyAccommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccommodationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
