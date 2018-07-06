/**
 * Created By : Prem Shankar
 */

import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent {
	title = 'Patient Information';

	patientList = [{	
		id : 1,
		first_name : "Prem",
		last_name : "Shankar",
		email : "shanka@abc.com",
		phone : "(952) 774-2801",
		department : "Hemo"
	},
	{
		id : 2,
		first_name : "Track",
		last_name : "Sha",
		email : "abc@abc.com",
		phone : "(857) 488-9658",
		department : "Neuro"
	},
	{
		id : 3,
		first_name : "Tina",
		last_name : "Dillon",
		email : "tina@mail.com",
		phone : "(748) 588-9658",
		department : "Cardiac"
	},
	{
		id : 4,
		first_name : "John",
		last_name : "Doe",
		email : "john@yopmail.com",
		phone : "(968) 558-9748",
		department : "Physician"
	},
	{
		id : 5,
		first_name : "Peter",
		last_name : "Parker",
		email : "peter@yopmail.com",
		phone : "(859) 585-6547",
		department : "General"
	}];
	
	patientInfo=[{  
		"attributes" : {    
			"type" : "Patient1__c",    
			"url" : "/services/data/v43.0/sobjects/Patient1__c/a0u36000006GGL4AAO"  
		},  
		"Id" : "a0u36000006GGL4AAO",  
		"IsDeleted" : false,  
		"Name" : "Aaliyah  Pope",  
		"CreatedDate" : "2018-03-18T07:38:12.000+0000",  
		"CreatedById" : "00536000004OxsEAAS",  
		"LastModifiedDate" : "2018-06-05T06:09:32.000+0000",  
		"LastModifiedById" : "00536000004OxsEAAS",  
		"SystemModstamp" : "2018-06-09T00:46:39.000+0000",  
		"LastViewedDate" : "2018-06-29T13:36:32.000+0000",  
		"LastReferencedDate" : "2018-06-29T13:36:32.000+0000",  
		"Service_Provider__c" : "0013600000wKnQ0AAK",  
		"Address__c" : "26406 N 64th Ave",  
		"City__c" : "Phoenix",  
		"Date_of_Birth__c" : "2002-03-17",  
		"Duplicate_Key__c" : "AaliyahPope2002-03-170013600000wKnQ0",  
		"First_Name__c" : "Aaliyah",  
		"Gender__c" : "Female",  
		"Home_Phone__c" : "(602) 516-5490",  
		"Last_Name__c" : "Pope",  
		"Send_Email__c" : false,  
		"State__c" : "AZ",  
		"Zip_Postal_Code__c" : "85083",  
		"Master_Patient_Id__c" : "a0B3600000UJWyiEAH",  
		"Master_Patient_ID_18__c" : "a0B3600000UJWyiEAH",  
		"isImport__c" : true,  
		"Short_Signature__c" : "A.P.",  
		"Signature__c" : "Aaliyah  Pope",  
		"Duplicate_Key1__c" : "a0B3600000UJWyiEAH0013600000wKnQ0",  
		"Service_Provider_Name__c" : "Trusted Care North Valley AZ LLC",  
		"Service_Provider_Address__c" : "Trusted Care North Valley AZ LLC<br>20950 N. Tatum Blvd Suite 170 Phoenix AZ 85050-4200",  
		"DME_Fee__c" : 200.00,  
		"Anesthesia_Fee__c" : 200.00,  
		"Facility_Fee__c" : 100.00,  
		"Professional_Fee__c" : 390.00,  
		"Initial_Patient_Fee__c" : 0.00,  
		"Document_Ids__c" : "a0x36000005Wad6AAC,a0x36000005Wm40AAC,a0x36000005WaQHAA0,a0x36000005WaQMAA0,a0x36000005WaQRAA0,a0x36000005WaQWAA0,a0x36000005WaQbAAK"
	}];
	patientInsuranceList=[{  
		"attributes" : {    
			"type" : "Patient_Insurance1__c",    
			"url" : "/services/data/v43.0/sobjects/Patient_Insurance1__c/a0v36000008Cr3YAAS"  
		},  
		"Id" : "a0v36000008Cr3YAAS",  
		"IsDeleted" : false,  
		"Name" : "W203720625",  
		"CreatedDate" : "2018-03-18T15:14:12.000+0000",  
		"CreatedById" : "00536000004OxsEAAS",  
		"LastModifiedDate" : "2018-03-29T16:13:03.000+0000",  
		"LastModifiedById" : "00536000004AnqvAAC",  
		"SystemModstamp" : "2018-04-30T10:58:25.000+0000",  
		"LastViewedDate" : "2018-06-29T13:42:41.000+0000",  
		"LastReferencedDate" : "2018-06-29T13:42:41.000+0000",  
		"Patient__c" : "a0u36000006GGL4AAO",  
		"Insurance_Company__c" : "00136000009xpHTAAY",  
		"Deductible_Applies_to_OOP_Max__c" : "Yes",  
		"Down_Payment_Amount__c" : 0.00,  
		"Effective_Date__c" : "2015-03-01",  
		"Email__c" : "spope0709@gmail.com",  
		"Exclusions__c" : "No",  
		"Facility_Fee__c" : 0.00,  
		"Group_Number__c" : "865251",  
		"IN_and_OON_Cross_Accumulate__c" : "Yes",  
		"In_Network_Co_Insurance_Amount__c" : "80/20",  
		"In_Network_Deductible_Remaining__c" : 0.00,  
		"In_Network_Deductible__c" : 1250.00,  
		"In_Network_OOP_Max_Remaining__c" : 2752.44,  
		"In_Network_OOP_Max__c" : 4250.00,  
		"Insurance_Co_Name__c" : "Aetna",  
		"MemberId_Link__c" : "<a href=\"/a0v36000008Cr3Y\" target=\"_self\"> </a>",  
		"Member_Id_Link__c" : "<a href=\"/a0v36000008Cr3Y\" target=\"_self\"> </a>",  
		"Out_of_Network_Co_Insurance_Amount__c" : "60/40",  
		"Out_of_Network_Deductible_Remaining__c" : 2500.00,  
		"Out_of_Network_Deductible__c" : 3750.00,  
		"Out_of_Network_OOP_Max_Remaining__c" : 5752.44,  
		"Out_of_Network_OOP_Max__c" : 7250.00,  
		"Patient_Relationship_to_Policy_Holder__c" : "18 -- Self",  
		"Plan_Pays__c" : "80% U & C",  
		"Policy_Holder_Date_of_Birth__c" : "2002-03-17",  
		"Send_Email__c" : false,  "Type__c" : "Primary",  
		"Master_Patient_Insurance_Id__c" : "a0A3600000MTDdyEAH",  
		"Master_Patient_Insurance_Id_18__c" : "a0A3600000MTDdyEAH",  
		"isImport__c" : true
	}];

	constructor() {
		// Save patients to localStorage
		localStorage.setItem('patients', JSON.stringify(this.patientList));
		localStorage.setItem('patientInfo', JSON.stringify(this.patientInfo));
		localStorage.setItem('patientInsuranceList', JSON.stringify(this.patientInsuranceList));
	}
}

