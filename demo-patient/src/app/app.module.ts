import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { enableProdMode } from '@angular/core';

//Bootstrap
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Modules
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 
import { NgBootstrapFormValidationModule } from "../lib/ng-bootstrap-form-validation.module";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

// Services
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { PatientService } from './services/patient/patient.service';

// Pipes
import { FilterPipe } from './pipes/filter.pipe';
import { PhonePipe } from './pipes/phone.pipe';

// Components
import { AppComponent } from './components/index/app.component';
import { PatientListComponent } from './components/patient/list/patient-list.component';
import { PatientDetailsComponent } from './components/patient/details/patient-details.component';
import { PatientAddComponent } from './components/patient/add/patient-add.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent, homeChildRoutes } from './components/home/home.component';
import { HighlightPatientDirective } from './directives/highlight-patient.directive';

import { DefaultErrorsDemoComponent } from "./default-errors-demo/default-errors-demo.component";


// Parent Routes
const routes : Routes = [
{
	path: '',
	component: HomeComponent,
	children :homeChildRoutes,
	canActivate : [AuthService]
},
{
	path: 'login',
	component: LoginComponent
},
{
	path: '**',
	redirectTo: ''
}
];

@NgModule({
  declarations: [AppComponent, DefaultErrorsDemoComponent, NavBarComponent,PatientListComponent,
	PatientDetailsComponent,
	PatientAddComponent,
	LoginComponent,
	HomeComponent,
	FilterPipe,
	PhonePipe,
	HighlightPatientDirective],
  imports: [
    BrowserModule,
	RouterModule,
	RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
BrowserAnimationsModule,
    NgBootstrapFormValidationModule.forRoot(),
	ToastrModule.forRoot({ 
		timeOut: 3000,
		positionClass: 'toast-bottom-right',
		preventDuplicates: true,
	}),
  ],
  providers: [AuthService,UserService,PatientService],
  bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }
