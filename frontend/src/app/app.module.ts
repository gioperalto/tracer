import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { TabsHomeComponent } from './tabs/home/home.component';
import { TabsLocationsComponent } from './tabs/locations/locations.component';
import { TabsExposuresComponent } from './tabs/exposures/exposures.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create/create-account/create-account.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { locationsReducer } from './state/locations/locations.reducer';
import { StoreModule } from '@ngrx/store';
import { AuthService } from './auth/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CreateLocationComponent } from './create/location/location.component';
import { MatNativeDateModule } from '@angular/material/core';
import { CreateExposureComponent } from './create/exposure/exposure.component';
import { patientsReducer } from './state/patients/patients.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateAccountComponent,
    CreateLocationComponent,
    CreateExposureComponent,
    TabsHomeComponent,
    TabsLocationsComponent,
    TabsExposuresComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatChipsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    StoreModule.forRoot({ patient: patientsReducer, locations: locationsReducer }),
  ],
  providers: [AuthService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
