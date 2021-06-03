import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateBrandDialogComponent } from '../create-brand-dialog/create-brand-dialog.component';
import {EditBrandDialogComponent} from '../edit-brand-dialog/edit-brand-dialog.component';
import {ManageBrandDialogComponent} from '../manage-brand-dialog/manage-brand-dialog.component';
import {DeleteBrandDialogComponent} from '../delete-brand-dialog/delete-brand-dialog.component';
import {  FormControl } from '@angular/forms';
import { BrandService } from '../brand.service';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-brand-list',
  templateUrl:'./brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  public brandList :any = [];
  searchText = new FormControl();
  constructor(public dialog: MatDialog,
              public brandService: BrandService) { }

  ngOnInit(): void {
    this.brandService.getBrands().subscribe((response) => {
      this.brandList = response;
    })    

  	/*this.brandList = [
  	{
      id: 1,
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
      id : 2,
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


  	];*/
  }

  generateTooltip(currentBrandObj) {
    if(!currentBrandObj.CreatedBy){
      return "";
    }
    return 'Created by : '+ currentBrandObj.CreatedBy+ ' @ '+currentBrandObj.CreatedDate;
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
      if(result) {
        this.brandService.createBrand(result).subscribe((response) => {
          this.brandList.push(result);
        })    
      }
      
    });
  }

  editBrandDialog(brandObject){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "500px";
    dialogConfig.height = "400px";
    dialogConfig.data = brandObject;

    const dialogRef =  this.dialog.open(EditBrandDialogComponent, dialogConfig);
   

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      var index = this.brandList.findIndex(item => item.id === result.id)
      this.brandList.splice(index, 1, result)
    });
}
	manageBrandDialog(){
		const dialogConfig = new MatDialogConfig();
	
		dialogConfig.disableClose = false;
		dialogConfig.autoFocus = true;
		dialogConfig.width = "500px";
		dialogConfig.height = "300px";
		dialogConfig.data = {
			id: 1,
			title: 'Angular For Beginners'
		};
	
		const dialogRef =  this.dialog.open(ManageBrandDialogComponent, dialogConfig);
	   
	
		dialogRef.afterClosed().subscribe(result => {
		  console.log(`Dialog result: ${result}`);
		
		});
	}
		deleteBrandDialog(){
			const dialogConfig = new MatDialogConfig();
		
			dialogConfig.disableClose = false;
			dialogConfig.autoFocus = true;
			dialogConfig.width = "500px";
			dialogConfig.height = "300px";
			dialogConfig.data = {
				id: 1,
				title: 'Angular For Beginners'
			};
		
			const dialogRef =  this.dialog.open(DeleteBrandDialogComponent, dialogConfig);
		   
		
			dialogRef.afterClosed().subscribe(result => {
			  console.log(`Dialog result: ${result}`);
			  
			});
		}
}