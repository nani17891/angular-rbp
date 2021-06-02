import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBrandDialogComponent } from './delete-brand-dialog.component';

describe('DeleteBrandDialogComponent', () => {
  let component: DeleteBrandDialogComponent;
  let fixture: ComponentFixture<DeleteBrandDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteBrandDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBrandDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
