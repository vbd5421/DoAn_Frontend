import { Role } from "../role/role";

export class User {
    id: number;
    userName:any;
    username:any
    email:any;
    password:any;
    firstName:any;
    lastName:any;
    active:any;
    role:Role;
    token: any;
    roles:Role[]=[]
}
