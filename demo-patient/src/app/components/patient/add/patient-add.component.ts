/**
 * Created By : Prem Shankar
 */
 import { Component, OnInit } from '@angular/core';
 import {Validators, FormBuilder, FormGroup} from '@angular/forms';
 import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';

 // Services
 import { ValidationService } from '../../../services/config/config.service';
 import { PatientService } from '../../../services/patient/patient.service';
 import { routerTransition } from '../../../services/config/config.service';
 
 import { ToastrService } from 'ngx-toastr';

 @Component({
 	selector: 'app-patient-add',
 	templateUrl: './patient-add.component.html',
 	styleUrls: ['./patient-add.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })

 export class PatientAddComponent implements OnInit {
 	// create patientAddForm of type FormGroup 
 	private patientAddForm : FormGroup;
 	index:any;

 	constructor(private formBuilder: FormBuilder,private router: Router, private route: ActivatedRoute, private patientService:PatientService,private toastr: ToastrService) { 

 		// Check for route params
 		this.route.params.subscribe(params => {
 			this.index = params['id'];
 			// check if ID exists in route & call update or add methods accordingly
 			if (this.index && this.index != null && this.index != undefined) {
 				this.getPatientDetails(this.index);
 			}else{
 				this.createForm(null);
 			}
 		});
 	}

 	ngOnInit() {
 	}

 	// Submit patient details form
 	doRegister(){
 		if (this.index && this.index != null && this.index != undefined) {
 			this.patientAddForm.value.id = this.index
 		}else{
 			this.index = null;
 		}
 		let patientRegister = this.patientService.doRegisterPatient(this.patientAddForm.value, this.index);
 		if(patientRegister) {
 			if (patientRegister.code == 200) {
 				this.toastr.success(patientRegister.message,"Success");
 				this.router.navigate(['/']);
 			}else{
 				this.toastr.error(patientRegister.message,"Failed");
 			}
 		}
 	}

 	// If this is update form, get user details and update form
 	getPatientDetails(index:number){
 		let patientDetail = this.patientService.getPatientDetails(index);
 		this.createForm(patientDetail);
 	}

 	// If this is update request then auto fill form
 	createForm(data){
 		if (data == null) {
 			this.patientAddForm = this.formBuilder.group({
 				first_name: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
 				last_name: ['',  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
 				phone: ['',  [Validators.required,ValidationService.checkLimit(5000000000,9999999999)]],
 				email: ['',  [Validators.required, ValidationService.emailValidator]]
 			});			
 		}else{
 			this.patientAddForm = this.formBuilder.group({
 				first_name: [data.patientData.first_name,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
 				last_name: [data.patientData.last_name,  [Validators.required,Validators.minLength(3),Validators.maxLength(50)]],
 				phone: [data.patientData.phone,  [Validators.required,ValidationService.checkLimit(5000000000,9999999999)]],
 				email: [data.patientData.email,  [Validators.required, ValidationService.emailValidator]]
 			});
 		}
 	}

 }

/**
 * Created By : Sangwin Gawande (http://sangw.in)
 */