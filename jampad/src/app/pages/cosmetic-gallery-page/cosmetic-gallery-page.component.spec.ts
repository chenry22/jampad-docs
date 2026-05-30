import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticGalleryPageComponent } from './cosmetic-gallery-page.component';

describe('CosmeticGalleryPageComponent', () => {
  let component: CosmeticGalleryPageComponent;
  let fixture: ComponentFixture<CosmeticGalleryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CosmeticGalleryPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosmeticGalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
