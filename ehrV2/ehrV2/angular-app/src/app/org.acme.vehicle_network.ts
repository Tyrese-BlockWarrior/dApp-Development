import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.vehicle_network{
   export abstract class Person extends Participant {
      username: string;
   }
   export class Doctor extends Person {
   }
   export class Mom extends Person {
   }
   export class Baby extends Asset {
      babyId: string;
      name: string;
      lastVisit: string;
      balanceDue: number;
      age: string;
      gender: string;
      DoB: string;
      nextCheckUp: string;
      immunizations: string[];
      examinationNote: string[];
      doctorId: string;
      momId: string;
   }
   export class addBaby extends Transaction {
      babyId: string;
      name: string;
      lastVisit: string;
      balanceDue: number;
      age: string;
      gender: string;
      DoB: string;
      nextCheckUp: string;
      immunizations: string[];
      examinationNote: string[];
      doctorId: string;
      momId: string;
   }
   export class UpdateStatus extends Transaction {
      babyId: string;
      lastVisit: string;
      balanceDue: number;
      age: string;
      doctorId: string;
   }
   export class addImmunizations extends Transaction {
      babyId: string;
      vaccines: string;
   }
   export class addExaminationNote extends Transaction {
      babyId: string;
      note: string;
   }
   export class nextCheckUp extends Transaction {
      babyId: string;
      date: string;
   }
// }
