import { Component, OnInit, Inject } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import { MAT_DIALOG_DATA,MatDialogRef } from "@angular/material/dialog";
import {  FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { BrandService } from '../brand.service';


@Component({
  selector: 'app-manage-brand-dialog',
  templateUrl: './manage-brand-dialog.component.html',
  styleUrls: ['./manage-brand-dialog.component.less']
})
export class ManageBrandDialogComponent implements OnInit {
  
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  control = new FormControl();
  filteredUsers: any;
  selectedUsers = [];
  public managerReq:any = [];
  brandData;

  userAccess = [
    {value: 'Fullaccess', viewValue: 'Full Access'},
    {value: 'Read', viewValue: 'Read'}
  ];


  users: any = [
    {
      access_level:"Fullaccess",
      email:"camon.hadded@zs.com",
      fullname: 'poosapati raja',
      id:1,
      is_active:null,
      username:"ch28363",
      
    },
    {
      access_level:"Fullaccess",
      email:"camon.hadded@zs.com",
      fullname: 'aaaaaaaaaa raja',
      id:2,
      is_active:null,
      username:"ch111223",
    },
     {
      access_level:"Read",
      email:"camon.hadded@zs.com",
      fullname: 'bbbb',
      id:3,
      is_active:null,
      username:"ch998899",
    } 
  ];
 
  constructor(public dialogRef: MatDialogRef<ManageBrandDialogComponent>,
         @Inject(MAT_DIALOG_DATA) brandResp,public brandService:BrandService) { 

          this.brandData  = brandResp;

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

  onAccessChange(userObj,value){
    const index = this.selectedUsers.indexOf(userObj);

    if (index >= 0) {
     this.selectedUsers[index].access_level = value;
      
    }
  }


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

  save(){
   let self = this;
   this.selectedUsers.forEach(function(item){
      self.managerReq.push({
        "brand_id":self.brandData.id,
        "user_id":item.id,
        "access_level":item.access_level,
        "action":"add"
      })
   });

   this.dialogRef.close(this.managerReq);
  }

  close() {
    this.dialogRef.close();
  }

}
