import { ComponentFixture, TestBed } from '@angular/core/testing';
import { navbarrComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: navbarrComponent;
  let fixture: ComponentFixture<navbarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ navbarrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(navbarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
