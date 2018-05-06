import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.vehicle_network{
   export class Detail {
      age: string;
      gender: string;
   }
   export abstract class Person extends Participant {
      username: string;
   }
   export class Doctor extends Person {
   }
   export class Mom extends Person {
   }
   export class Baby extends Asset {
      babyId: string;
      detail: Detail;
      mom: Mom;
   }
   export class addBaby extends Transaction {
      babyId: string;
      detail: Detail;
      mom: Mom;
   }
   export class UpdateStatus extends Transaction {
      babyId: string;
      detail: Detail;
      status: string;
   }
// }
