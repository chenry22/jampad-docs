import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCreatorPageComponent } from './event-creator-page.component';

describe('EventCreatorPageComponent', () => {
  let component: EventCreatorPageComponent;
  let fixture: ComponentFixture<EventCreatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCreatorPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCreatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
