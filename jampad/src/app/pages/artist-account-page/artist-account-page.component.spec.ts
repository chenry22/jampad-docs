import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAccountPageComponent } from './artist-account-page.component';

describe('ArtistAccountPageComponent', () => {
  let component: ArtistAccountPageComponent;
  let fixture: ComponentFixture<ArtistAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistAccountPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
