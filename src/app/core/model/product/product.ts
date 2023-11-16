import { Member } from "../member/member";

export class Product {
    id:number;
    title:any;
    description:any
    content:any;
    date:any;
    image:any;
    url:any;
    active:boolean;
    members: Member[]=[];
}
