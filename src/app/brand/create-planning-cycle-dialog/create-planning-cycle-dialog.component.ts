import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from "@angular/material/dialog";
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-planning-cycle-brand-dialog',
  templateUrl: './create-planning-cycle-dialog.component.html',
  styleUrls: ['./create-planning-cycle-dialog.component.less']
})
export class CreatePlanningCycleDialogComponent implements OnInit {
	
  description: string;
  planningCycleForm: FormGroup;
  control = new FormControl();
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets: Observable<string[]>;

  constructor(public dialogRef: MatDialogRef<CreatePlanningCycleDialogComponent>,
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
  	this.planningCycleForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [ Validators.required,Validators.maxLength(50)]]
     });
  }

  save() {
    this.dialogRef.close(this.planningCycleForm.value);
  }

  close() {
    this.dialogRef.close();
  }

}