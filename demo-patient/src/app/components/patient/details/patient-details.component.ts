/**
 * Created By : Prem Shankar
 */
 import { Component, OnInit } from '@angular/core';
 import {Validators, FormBuilder, FormGroup} from '@angular/forms';
 import { RouterModule, Routes ,Router,ActivatedRoute} from '@angular/router';
 import { ToastrService } from 'ngx-toastr';

 // Services
 import { PatientService } from '../../../services/patient/patient.service';
 import { routerTransition } from '../../../services/config/config.service';

 @Component({
 	selector: 'app-patient-details',
 	templateUrl: './patient-details.component.html',
 	styleUrls: ['./patient-details.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })

 export class PatientDetailsComponent implements OnInit {
 	index:any;
 	patientDetail:any;
 	constructor(private router: Router, private route: ActivatedRoute, private patientService:PatientService,private toastr: ToastrService) { 
 		// Get user detail index number sent in params
 		this.route.params.subscribe(params => {
 			this.index = params['id'];
 			if (this.index && this.index != null && this.index != undefined) {
 				this.getPatientDetails(this.index);
 			}
 		});
 	}

 	ngOnInit() {
 	}

 	// Get patient details 
 	getPatientDetails(index:number){
 		let getPatientDetail = this.patientService.getPatientDetails(index);
 		if(getPatientDetail) {
 			this.patientDetail = getPatientDetail.patientData;
 			this.toastr.success(getPatientDetail.message,"Success");
 		}
 	}

 }

