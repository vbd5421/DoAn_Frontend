import { Role } from "../role/role";

export class User {
    id: number;
    username:any;
    email:any;
    password:any;
    firstName:any;
    lastName:any;
    active=false;
    //role:Role;
    token: any;
    roles:Role[]=[]
}
