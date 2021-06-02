import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBrandDialogComponent } from './manage-brand-dialog.component';

describe('ManageBrandDialogComponent', () => {
  let component: ManageBrandDialogComponent;
  let fixture: ComponentFixture<ManageBrandDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBrandDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBrandDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
