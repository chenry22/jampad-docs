import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmeticCreateComponent } from './cosmetic-create.component';

describe('CosmeticCreateComponent', () => {
  let component: CosmeticCreateComponent;
  let fixture: ComponentFixture<CosmeticCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CosmeticCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CosmeticCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
