import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAccountPageComponent } from './admin-account-page.component';

describe('AdminAccountPageComponent', () => {
  let component: AdminAccountPageComponent;
  let fixture: ComponentFixture<AdminAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAccountPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
