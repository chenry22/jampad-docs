import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrogPageComponent } from './frog-page.component';

describe('FrogPageComponent', () => {
  let component: FrogPageComponent;
  let fixture: ComponentFixture<FrogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrogPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
