/**
 * Created By : Prem Shankar
 */

 import { Component, OnInit } from '@angular/core';
 import { ToastrService } from 'ngx-toastr';

 // Services
 import { PatientService } from '../../../services/patient/patient.service';
 import { routerTransition } from '../../../services/config/config.service';

 @Component({
 	selector: 'app-patient-list',
 	templateUrl: './patient-list.component.html',
 	styleUrls: ['./patient-list.component.css'],
 	animations: [routerTransition()],
 	host: {'[@routerTransition]': ''}
 })

 export class PatientListComponent implements OnInit {
 	patientList:any;
 	patientListData:any;
 	constructor(private patientService:PatientService,private toastr: ToastrService) { }
 	// Call patient list function on page load 
 	ngOnInit() {
 		this.getPatientList();
 	}

 	// Get patient list from services
 	getPatientList(){
 		let patientList = this.patientService.getAllPatients();
 		this.success(patientList)
 	}

 	// Get patient list success
 	success(data){
 		this.patientListData = data.data;
 		for (var i = 0; i < this.patientListData.length; i++) {
 			this.patientListData[i].name = this.patientListData[i].first_name +' '+ this.patientListData[i].last_name;
 		}
 	}

 	// Delete a patient with its index
 	deletePatient(index:number){
 		// get confirm box for confirmation
 		let r = confirm("Are you sure?");
 		if (r == true) {
 			let patientDelete = this.patientService.deletePatient(index);
 			if(patientDelete) {
 				this.toastr.success("Success", "Patient Deleted");
 			} 
 			this.getPatientList();
 		}
 	}
 }
