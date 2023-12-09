import { CateProject } from "../cate-project/cate-project";
import { Member } from "../member/member";

export class Project {
    id:number;
    name:any;
    description:any;
    content:any;
    image:any;
    url:any;
    date:any; //DTO
    createDate:any; //ngày triển khai
    updateDate:any;
    //0, đang triển khai;1 đã hoàn thành
    status:boolean;
    cateProject: CateProject = new CateProject();
    members : Member[]=[];
}
