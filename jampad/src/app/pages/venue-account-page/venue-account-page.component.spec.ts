import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueAccountPageComponent } from './venue-account-page.component';

describe('VenueAccountPageComponent', () => {
  let component: VenueAccountPageComponent;
  let fixture: ComponentFixture<VenueAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenueAccountPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
