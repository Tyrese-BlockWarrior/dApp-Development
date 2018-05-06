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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { BabyComponent } from './Baby/Baby.component';


  import { DoctorComponent } from './Doctor/Doctor.component';
  import { MomComponent } from './Mom/Mom.component';


  import { addBabyComponent } from './addBaby/addBaby.component';
  import { UpdateStatusComponent } from './UpdateStatus/UpdateStatus.component';  
const routes: Routes = [
     //{ path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'Baby', component: BabyComponent},
    
    
      { path: 'Doctor', component: DoctorComponent},
      
      { path: 'Mom', component: MomComponent},
      
      
        { path: 'addBaby', component: addBabyComponent},
        
        { path: 'UpdateStatus', component: UpdateStatusComponent},
        
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
