import { Component, OnInit ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from "@angular/material/dialog";
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { BrandService } from '../brand.service';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-create-brand-dialog',
  templateUrl: './create-brand-dialog.component.html',
  styleUrls: ['./create-brand-dialog.component.less']
})
export class CreateBrandDialogComponent implements OnInit {
	
  description: string;
  brandForm: FormGroup;
  control = new FormControl();
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  filteredUsers: any;
  selectedUsers = [];
  constructor(public dialogRef: MatDialogRef<CreateBrandDialogComponent>,public brandService:BrandService,
  			 @Inject(MAT_DIALOG_DATA) data,
  			 private formBuilder: FormBuilder) {
 
  			 this.initForm();

  }

  ngOnInit(): void {
  	let self = this;
    this.control.valueChanges
    .subscribe(value => {
      if(value.length >= 1){
          self.filteredUsers = [];
          this.brandService.gerUsers(value).subscribe(response => {
            self.filteredUsers = response;
          });
        }
        else {
          return null;
        }
    })
  
  }

  userAccess = [
    {value: 'Fullaccess', viewValue: 'Full Access'},
    {value: 'Read', viewValue: 'Read'}
  ];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our user
    if (value && this.filteredUsers.find(a => a.username == value)) {
      this.selectedUsers.push(this.filteredUsers.find(a => a.username == value));
    }

    // Clear the input value
    this.control.reset()
  }

  remove(user: any,i: any): void {
    const index = this.selectedUsers.indexOf(user);

    if (index >= 0) {

     this.selectedUsers[index].action = "delete";
      this.selectedUsers.splice(i, 1);
    }
  }

 

  initForm(){
  	this.brandForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', [ Validators.required,Validators.maxLength(50)]],
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
