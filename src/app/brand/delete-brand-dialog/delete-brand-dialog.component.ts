import { Component, OnInit , Inject} from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-delete-brand-dialog',
  templateUrl: './delete-brand-dialog.component.html',
  styleUrls: ['./delete-brand-dialog.component.css']
})
export class DeleteBrandDialogComponent implements OnInit {

  brandObj : any;

  constructor(public dialogRef: MatDialogRef<DeleteBrandDialogComponent>,
  			 @Inject(MAT_DIALOG_DATA) brandResp) { 

  			 	this.brandObj = brandResp;
  			 }

  ngOnInit(): void {
  }

  deleteBrand(){
  	this.dialogRef.close(this.brandObj);
  }
  
}
