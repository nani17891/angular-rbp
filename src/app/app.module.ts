import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { BrandComponent } from './brand/brand.component';
import { CreateBrandDialogComponent } from './brand/create-brand-dialog/create-brand-dialog.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandComponent,
    CreateBrandDialogComponent,
    BrandListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CreateBrandDialogComponent]
})
export class AppModule { }
