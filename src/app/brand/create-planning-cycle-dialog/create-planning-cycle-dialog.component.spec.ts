import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBrandDialogComponent } from './create-brand-dialog.component';

describe('CreateBrandDialogComponent', () => {
  let component: CreateBrandDialogComponent;
  let fixture: ComponentFixture<CreateBrandDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBrandDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBrandDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
