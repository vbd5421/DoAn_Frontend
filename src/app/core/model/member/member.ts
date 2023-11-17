import { Project } from "../project/project";

export class Member {
    id:number;
    image:any;
    fullName:any;
    description:any;
    //năm tham gia
    timeJoin:any;
    // năm sinh
    birthDate:any;
    phone:any;
    position:any;
    email:any;
    degree:any;
    linkInfo:any;
    selected=false;
    active:boolean;
    projectName:Project[]=[]
}
