/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { addBabyService } from './addBaby.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-addBaby',
	templateUrl: './addBaby.component.html',
	styleUrls: ['./addBaby.component.css'],
  providers: [addBabyService]
})
export class addBabyComponent implements OnInit {

  myForm: FormGroup;

  private allTransactions;
  private Transaction;
  private currentId;
	private errorMessage;

  
      
          babyId = new FormControl("", Validators.required);
        
  
      
          name = new FormControl("", Validators.required);
        
  
      
          lastVisit = new FormControl("", Validators.required);
        
  
      
          balanceDue = new FormControl("", Validators.required);
        
  
      
          age = new FormControl("", Validators.required);
        
  
      
          gender = new FormControl("", Validators.required);
        
  
      
          DoB = new FormControl("", Validators.required);
        
  
      
          nextCheckUp = new FormControl("", Validators.required);
        
  
      
          immunizations = new FormControl("", Validators.required);
        
  
      
          examinationNote = new FormControl("", Validators.required);
        
  
      
          doctorId = new FormControl("", Validators.required);
        
  
      
          momId = new FormControl("", Validators.required);
        
  
      
          transactionId = new FormControl("", Validators.required);
        
  
      
          timestamp = new FormControl("", Validators.required);
        
  


  constructor(private serviceaddBaby:addBabyService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          babyId:this.babyId,
        
    
        
          name:this.name,
        
    
        
          lastVisit:this.lastVisit,
        
    
        
          balanceDue:this.balanceDue,
        
    
        
          age:this.age,
        
    
        
          gender:this.gender,
        
    
        
          DoB:this.DoB,
        
    
        
          nextCheckUp:this.nextCheckUp,
        
    
        
          immunizations:this.immunizations,
        
    
        
          examinationNote:this.examinationNote,
        
    
        
          doctorId:this.doctorId,
        
    
        
          momId:this.momId,
        
    
        
          transactionId:this.transactionId,
        
    
        
          timestamp:this.timestamp
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceaddBaby.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      result.forEach(transaction => {
        tempList.push(transaction);
      });
      this.allTransactions = tempList;
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the transaction field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the transaction updateDialog.
   * @param {String} name - the name of the transaction field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified transaction field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: "org.acme.vehicle_network.addBaby",
      
        
          "babyId":this.babyId.value,
        
      
        
          "name":this.name.value,
        
      
        
          "lastVisit":this.lastVisit.value,
        
      
        
          "balanceDue":this.balanceDue.value,
        
      
        
          "age":this.age.value,
        
      
        
          "gender":this.gender.value,
        
      
        
          "DoB":this.DoB.value,
        
      
        
          "nextCheckUp":this.nextCheckUp.value,
        
      
        
          "immunizations":this.immunizations.value,
        
      
        
          "examinationNote":this.examinationNote.value,
        
      
        
          "doctorId":this.doctorId.value,
        
      
        
          "momId":this.momId.value,
        
      
        
          "transactionId":this.transactionId.value,
        
      
        
          "timestamp":this.timestamp.value
        
      
    };

    this.myForm.setValue({
      
        
          "babyId":null,
        
      
        
          "name":null,
        
      
        
          "lastVisit":null,
        
      
        
          "balanceDue":null,
        
      
        
          "age":null,
        
      
        
          "gender":null,
        
      
        
          "DoB":null,
        
      
        
          "nextCheckUp":null,
        
      
        
          "immunizations":null,
        
      
        
          "examinationNote":null,
        
      
        
          "doctorId":null,
        
      
        
          "momId":null,
        
      
        
          "transactionId":null,
        
      
        
          "timestamp":null
        
      
    });

    return this.serviceaddBaby.addTransaction(this.Transaction)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "babyId":null,
        
      
        
          "name":null,
        
      
        
          "lastVisit":null,
        
      
        
          "balanceDue":null,
        
      
        
          "age":null,
        
      
        
          "gender":null,
        
      
        
          "DoB":null,
        
      
        
          "nextCheckUp":null,
        
      
        
          "immunizations":null,
        
      
        
          "examinationNote":null,
        
      
        
          "doctorId":null,
        
      
        
          "momId":null,
        
      
        
          "transactionId":null,
        
      
        
          "timestamp":null 
        
      
      });
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{
            this.errorMessage = error;
        }
    });
  }


   updateTransaction(form: any): Promise<any> {
    this.Transaction = {
      $class: "org.acme.vehicle_network.addBaby",
      
        
          
            "babyId":this.babyId.value,
          
        
    
        
          
            "name":this.name.value,
          
        
    
        
          
            "lastVisit":this.lastVisit.value,
          
        
    
        
          
            "balanceDue":this.balanceDue.value,
          
        
    
        
          
            "age":this.age.value,
          
        
    
        
          
            "gender":this.gender.value,
          
        
    
        
          
            "DoB":this.DoB.value,
          
        
    
        
          
            "nextCheckUp":this.nextCheckUp.value,
          
        
    
        
          
            "immunizations":this.immunizations.value,
          
        
    
        
          
            "examinationNote":this.examinationNote.value,
          
        
    
        
          
            "doctorId":this.doctorId.value,
          
        
    
        
          
            "momId":this.momId.value,
          
        
    
        
          
        
    
        
          
            "timestamp":this.timestamp.value
          
        
    
    };

    return this.serviceaddBaby.updateTransaction(form.get("transactionId").value,this.Transaction)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteTransaction(): Promise<any> {

    return this.serviceaddBaby.deleteTransaction(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceaddBaby.getTransaction(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "babyId":null,
          
        
          
            "name":null,
          
        
          
            "lastVisit":null,
          
        
          
            "balanceDue":null,
          
        
          
            "age":null,
          
        
          
            "gender":null,
          
        
          
            "DoB":null,
          
        
          
            "nextCheckUp":null,
          
        
          
            "immunizations":null,
          
        
          
            "examinationNote":null,
          
        
          
            "doctorId":null,
          
        
          
            "momId":null,
          
        
          
            "transactionId":null,
          
        
          
            "timestamp":null 
          
        
      };



      
        if(result.babyId){
          
            formObject.babyId = result.babyId;
          
        }else{
          formObject.babyId = null;
        }
      
        if(result.name){
          
            formObject.name = result.name;
          
        }else{
          formObject.name = null;
        }
      
        if(result.lastVisit){
          
            formObject.lastVisit = result.lastVisit;
          
        }else{
          formObject.lastVisit = null;
        }
      
        if(result.balanceDue){
          
            formObject.balanceDue = result.balanceDue;
          
        }else{
          formObject.balanceDue = null;
        }
      
        if(result.age){
          
            formObject.age = result.age;
          
        }else{
          formObject.age = null;
        }
      
        if(result.gender){
          
            formObject.gender = result.gender;
          
        }else{
          formObject.gender = null;
        }
      
        if(result.DoB){
          
            formObject.DoB = result.DoB;
          
        }else{
          formObject.DoB = null;
        }
      
        if(result.nextCheckUp){
          
            formObject.nextCheckUp = result.nextCheckUp;
          
        }else{
          formObject.nextCheckUp = null;
        }
      
        if(result.immunizations){
          
            formObject.immunizations = result.immunizations;
          
        }else{
          formObject.immunizations = null;
        }
      
        if(result.examinationNote){
          
            formObject.examinationNote = result.examinationNote;
          
        }else{
          formObject.examinationNote = null;
        }
      
        if(result.doctorId){
          
            formObject.doctorId = result.doctorId;
          
        }else{
          formObject.doctorId = null;
        }
      
        if(result.momId){
          
            formObject.momId = result.momId;
          
        }else{
          formObject.momId = null;
        }
      
        if(result.transactionId){
          
            formObject.transactionId = result.transactionId;
          
        }else{
          formObject.transactionId = null;
        }
      
        if(result.timestamp){
          
            formObject.timestamp = result.timestamp;
          
        }else{
          formObject.timestamp = null;
        }
      

      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void{
    this.myForm.setValue({
      
        
          "babyId":null,
        
      
        
          "name":null,
        
      
        
          "lastVisit":null,
        
      
        
          "balanceDue":null,
        
      
        
          "age":null,
        
      
        
          "gender":null,
        
      
        
          "DoB":null,
        
      
        
          "nextCheckUp":null,
        
      
        
          "immunizations":null,
        
      
        
          "examinationNote":null,
        
      
        
          "doctorId":null,
        
      
        
          "momId":null,
        
      
        
          "transactionId":null,
        
      
        
          "timestamp":null 
        
      
      });
  }

}

