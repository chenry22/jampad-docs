import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInPageComponent } from './check-in-page.component';

describe('CheckInPageComponent', () => {
  let component: CheckInPageComponent;
  let fixture: ComponentFixture<CheckInPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckInPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckInPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
