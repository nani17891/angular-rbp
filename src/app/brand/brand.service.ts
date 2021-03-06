import { Injectable } from '@angular/core';
import { RestApiService } from '../common/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(public restApi : RestApiService) { }

  getBrands(){
  	return this.restApi.get("/brand");
  }

  createBrand(brandObj){
  	return this.restApi.post("/brand",brandObj);
  }

  updateBrand(brandObj){
  	return this.restApi.post("/brand",brandObj);
  }
}
