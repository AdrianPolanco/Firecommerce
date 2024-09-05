import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiGoogleButtonComponent } from './ui-google-button.component';

describe('UiGoogleButtonComponent', () => {
  let component: UiGoogleButtonComponent;
  let fixture: ComponentFixture<UiGoogleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiGoogleButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiGoogleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
