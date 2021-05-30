import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BrandComponent } from './brand/brand.component';
import { CreateBrandDialogComponent } from './brand/create-brand-dialog/create-brand-dialog.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { SearchFilterPipe } from './common/pipe/search-filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandComponent,
    CreateBrandDialogComponent,
    BrandListComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateBrandDialogComponent]
})
export class AppModule { }
