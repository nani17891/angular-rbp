import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {
  public brandList :any = [];
  constructor() { }

  ngOnInit(): void {
  	this.brandList = [{
  		name: "Brand Cam",
  		description: "Description about your brand",
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
  	},{
  		name: "Pine Brand",
  		description: "Description about your brand",
  		planCycle:[
  			{
  				name:'Plan Cycle'
  			} 
  		]
  	},


  	];
  }

}
