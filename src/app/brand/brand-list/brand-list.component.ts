import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateBrandDialogComponent } from '../create-brand-dialog/create-brand-dialog.component';
import { EditBrandDialogComponent } from '../edit-brand-dialog/edit-brand-dialog.component';
import { ManageBrandDialogComponent } from '../manage-brand-dialog/manage-brand-dialog.component';
import { DeleteBrandDialogComponent } from '../delete-brand-dialog/delete-brand-dialog.component';
import { FormControl } from '@angular/forms';
import { CreatePlanningCycleDialogComponent } from '../create-planning-cycle-dialog/create-planning-cycle-dialog.component';
import { BrandService } from '../brand.service';
import {Observable} from 'rxjs'
import { AuthenticationService } from '../../common/authentication.service';

@Component({
  selector: 'app-brand-list',
  templateUrl:'./brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  public brandList: any = [];
  searchText = new FormControl();
  showAdminUI = false;

  constructor(public dialog: MatDialog,public brandService:BrandService,
              public authService: AuthenticationService) { 

              this.showAdminUI = this.authService.isAdmin();
  }

  ngOnInit(): void {
	  this.loadBrandList();
    
  }

  restoreBrand() {

  }

  generateTooltip(currentBrandObj) {
    if(!currentBrandObj.CreatedBy){
      return "";
    }
    return 'Created by : '+ currentBrandObj.CreatedBy+ ' @ '+currentBrandObj.CreatedDate;
  }

  loadBrandList() {
    this.brandService.getBrands().subscribe(response=>this.brandList=response);
  }

  openNewBrandDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
     

    const dialogRef =  this.dialog.open(CreateBrandDialogComponent, dialogConfig);
   

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result) {
        this.brandService.createBrand(result).subscribe((_response) => {
          //this.brandList.push(result);
          this.loadBrandList();
        })    
      }
      
    });
  }

  editBrandDialog(brandObject){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "500px";
    
    this.brandService.getBrand(brandObject.id).subscribe((response) => {
          dialogConfig.data = response[0];
          const dialogRef =  this.dialog.open(EditBrandDialogComponent, dialogConfig);

 
          dialogRef.afterClosed().subscribe(result => {
              console.log(`Dialog result: ${result}`);
 
               this.brandService.updateBrand(result).subscribe((_response) => {
 
                  var index = this.brandList.findIndex(item => item.id === result.id)
                  this.brandList.splice(index, 1, result)
                })   
            });
          });
 }

	manageBrandDialog(){
		const dialogConfig = new MatDialogConfig();
	
		dialogConfig.disableClose = false;
		dialogConfig.autoFocus = true;
    dialogConfig.width = "500px";

		dialogConfig.data = {
			id: 1,
			title: 'Angular For Beginners'
		};
	
		const dialogRef =  this.dialog.open(ManageBrandDialogComponent, dialogConfig);
	   
	
		dialogRef.afterClosed().subscribe(result => {
		  console.log(`Dialog result: ${result}`);
		
		});
	}
  
 
	deleteBrandDialog(_brandObj){
 
		const dialogConfig = new MatDialogConfig();
	
		dialogConfig.disableClose = false;
		dialogConfig.autoFocus = true;
		dialogConfig.width = "500px";
 		dialogConfig.data = _brandObj
	
		const dialogRef =  this.dialog.open(DeleteBrandDialogComponent, dialogConfig);
  
	
		dialogRef.afterClosed().subscribe(result => {
		  console.log(`Dialog result: ${result}`);
 
      this.brandService.deleteBrand(_brandObj).subscribe((_response) => {
        this.loadBrandList()
	   });
	 });
  }

openNewPlanningCycleDialog(brand) {
  const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "600px";
    dialogConfig.height = "90vh";
    dialogConfig.data = brand;
    const dialogRef = this.dialog.open(CreatePlanningCycleDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      brand.planCycle.push(result);
    });
  }

}
