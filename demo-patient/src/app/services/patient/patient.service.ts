/**
 * Created By : Prem Shankar
 */

 import { Injectable } from '@angular/core';

 @Injectable()
 export class PatientService {

   constructor() { }

   // Get all patients list via API or any data storage
   getAllPatients(){
     let patientList:any;
     if(localStorage.getItem('patients') && localStorage.getItem('patients') != '') {
       patientList = {
         code : 200,
         message : "Patients List Fetched Successfully",
         data : JSON.parse(localStorage.getItem('patients'))
       }
     }else{
       patientList = {
         code : 200,
         message : "Patients List Fetched Successfully",
         data : JSON.parse(localStorage.getItem('patients'))
       }
     }
     return patientList;
   }

   doRegisterPatient(data, index){
     let patientList = JSON.parse(localStorage.getItem('patients'));
     let returnData;
     console.log("index", index);
     if(index != null) {


       for (var i = 0; i < patientList.length; i++) {
         if (index != i && patientList[i].email == data.email) {
           returnData = {
             code : 503,
             message : "Email Address Already In Use",
             data : null
           }    
           return returnData;
         }
       }

       patientList[index] = data;
       localStorage.setItem('patients',JSON.stringify(patientList));
       returnData = {
         code : 200,
         message : "Patient Successfully Updated",
         data : JSON.parse(localStorage.getItem('patients'))
       }    
     }else{      
       data.id = this.generateRandomID();
       for (var i = 0; i < patientList.length; i++) {
         if (patientList[i].email == data.email) {
           returnData = {
             code : 503,
             message : "Email Address Already In Use",
             data : null
           }    
           return returnData;
         }
       }
       patientList.unshift(data);

       localStorage.setItem('patients',JSON.stringify(patientList));

       returnData = {
         code : 200,
         message : "Patient Successfully Added",
         data : JSON.parse(localStorage.getItem('patients'))
       }    
     }
     return returnData;
   }

   deletePatient(index:number){
     let patientList = JSON.parse(localStorage.getItem('patients'));

     patientList.splice(index, 1);

     localStorage.setItem('patients',JSON.stringify(patientList));

     let returnData = {
       code : 200,
       message : "Patient Successfully Deleted",
       data : JSON.parse(localStorage.getItem('patients'))
     }

     return returnData;
   }



   getPatientDetails(index:number){
     let patientList = JSON.parse(localStorage.getItem('patients'));

     let returnData = {
       code : 200,
       message : "Patient Details Fetched",
       patientData : patientList[index]
     }

     return returnData;
   }


   generateRandomID() {
     var x = Math.floor((Math.random() * Math.random() * 9999));
     return x;
   }

 }

