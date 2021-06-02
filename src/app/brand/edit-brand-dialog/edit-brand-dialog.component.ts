import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from "@angular/material/dialog";
import { FormBuilder } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-brand-dialog',
  templateUrl: './edit-brand-dialog.component.html',
  styleUrls: ['./edit-brand-dialog.component.css']
})
export class EditBrandDialogComponent implements OnInit {
  
  brandEditForm: FormGroup;
  brandData : any;

  constructor(public dialogRef: MatDialogRef<EditBrandDialogComponent>,
  			 @Inject(MAT_DIALOG_DATA) brandResp,
  			 private formBuilder: FormBuilder) {

  			 this.brandData  = brandResp;
  			 this.initForm();
   }

  ngOnInit(): void {

  }

   initForm(){
  	this.brandEditForm = this.formBuilder.group({
  	  id: [this.brandData.id],
      name: [this.brandData.name, [Validators.required, Validators.minLength(10)]],
      description: [this.brandData.description, [ Validators.required,Validators.maxLength(50)]],
      CreatedDate: [this.brandData.CreatedDate],
      CreatedBy:[this.brandData.CreatedBy]
     });
  }

  update(){
   this.dialogRef.close(this.brandEditForm.value);
  }

  close() {
    this.dialogRef.close();
  }


}
