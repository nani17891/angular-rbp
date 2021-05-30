import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateBrandDialogComponent } from '../create-brand-dialog/create-brand-dialog.component';
import {  FormControl } from '@angular/forms';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  public brandList :any = [];
  searchText = new FormControl();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  	this.brandList = [
  	{
  		name: "Brand Cam",
  		description: "Description about your brand",
  		CreatedDate: "Wed, 26 May 2021 06:41:27 GMT",
  		CreatedBy: "jack",
  		planCycle:[
  			{
  				name:'Plan Cycle 2020'
  			},
  			{
  				name:'Plan Cycle 2021'
  			},
  			{
  				name:'Plan Cycle 2022'
  			}
  		]
  	},
  	{
  		name: "Pine Brand",
  		description: "Description about your brand",
  		CreatedDate: "Wed, 26 May 2021 06:41:27 GMT",
  		CreatedBy: "jack",
  		planCycle:[
  			{
  				name:'Plan Cycle'
  			} 
  		]
  	},


  	];
  }

  openNewBrandDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "500px";
    dialogConfig.height = "600px";
    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

    const dialogRef =  this.dialog.open(CreateBrandDialogComponent, dialogConfig);
   

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.brandList.push(result);
    });
  }

}
