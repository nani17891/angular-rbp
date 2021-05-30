import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from "@angular/material/dialog";
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-create-brand-dialog',
  templateUrl: './create-brand-dialog.component.html',
  styleUrls: ['./create-brand-dialog.component.css']
})
export class CreateBrandDialogComponent implements OnInit {
	
  description: string;
  brandForm: FormGroup;
  control = new FormControl();
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets: Observable<string[]>;

  constructor(public dialogRef: MatDialogRef<CreateBrandDialogComponent>,
  			 @Inject(MAT_DIALOG_DATA) data,
  			 private formBuilder: FormBuilder) {

  			 this.description = data.title;
  			 this.initForm();

  }

  ngOnInit(): void {
  	this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  initForm(){
  	this.brandForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [ Validators.maxLength(50)]],
      CreatedDate: [''],
      CreatedBy:['']
     });
  }

  save() {
    this.dialogRef.close(this.brandForm.value);
  }

  close() {
    this.dialogRef.close();
  }

}
