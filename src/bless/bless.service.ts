import {Injectable} from "@nestjs/common";

@Injectable()
export class BlessService {
   async getAllBless(){
       return [1,2,3];
   }
}