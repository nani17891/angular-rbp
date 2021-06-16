import { Component, OnInit } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-manage-brand-dialog',
  templateUrl: './manage-brand-dialog.component.html',
  styleUrls: ['./manage-brand-dialog.component.css']
})
export class ManageBrandDialogComponent implements OnInit {
  
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  control = new FormControl();
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets: Observable<any>;
  selectedUsers = [];

  users: any = [
    {
      id:1,
      brand_id:2,
      type:"fullaccess",
      name: 'ch28363',
      email:"camon.hadded@zs.com"
    },
    {
      id:2,
      brand_id:2,
      type:"read",
      name: 'ch28663',
      email:"acbe.code@zs.com"
    },
     {
      id:2,
      brand_id:2,
      type:"read",
      name: 'ch21263',
      email:"ch.2121@zs.com"
    } 
  ];
 
  constructor() { }

  ngOnInit(): void {
   this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: any): any {
    let filterValue = this._normalizeValue({name: value});
    console.log(this.users.filter(street => this._normalizeValue(street).indexOf(filterValue) !== -1));
    return this.users.filter(street => this._normalizeValue(street).indexOf(filterValue) !== -1);
  }

  private _normalizeValue(value: any): any {
    if(value && value.name)
    return value.name.toLowerCase().replace(/\s/g, '');
  }

  userAccess = [
    {value: 'fullaccess', viewValue: 'Full Access'},
    {value: 'read', viewValue: 'Read'}
  ];


  

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our user
    if (value && this.users.find(a => a.name == value)) {
      this.selectedUsers.push(this.users.find(a => a.name == value));
    }

    // Clear the input value
    this.control.reset()
  }

  remove(user: any): void {
    const index = this.selectedUsers.indexOf(user);

    if (index >= 0) {
      this.selectedUsers.splice(index, 1);
    }
  }

  close() {
    //this.dialogRef.close();
  }

}
