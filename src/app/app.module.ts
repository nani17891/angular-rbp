import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatTabsModule} from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BrandComponent } from './brand/brand.component';
import { CreateBrandDialogComponent } from './brand/create-brand-dialog/create-brand-dialog.component';
import { BrandListComponent } from './brand/brand-list/brand-list.component';
import { SearchFilterPipe } from './common/pipe/search-filter.pipe';
import { AuthInterceptor } from './common/auth.interceptor';
import { AuthenticationService } from './common/authentication.service';
import { EditBrandDialogComponent } from './brand/edit-brand-dialog/edit-brand-dialog.component';
import { ManageBrandDialogComponent } from './brand/manage-brand-dialog/manage-brand-dialog.component';
import { DeleteBrandDialogComponent } from './brand/delete-brand-dialog/delete-brand-dialog.component';
import { CreatePlanningCycleDialogComponent } from './brand/create-planning-cycle-dialog/create-planning-cycle-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioManagerComponent } from './portfolio-manager/portfolio-manager.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandComponent,
    CreateBrandDialogComponent,
    BrandListComponent,
    SearchFilterPipe,
    EditBrandDialogComponent,
    ManageBrandDialogComponent,
    DeleteBrandDialogComponent,
    CreatePlanningCycleDialogComponent,
    PortfolioManagerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatTooltipModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    NgbModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthenticationService],
  bootstrap: [AppComponent],
  entryComponents: [CreateBrandDialogComponent,EditBrandDialogComponent,ManageBrandDialogComponent,DeleteBrandDialogComponent,
  CreatePlanningCycleDialogComponent]
})
export class AppModule { }
