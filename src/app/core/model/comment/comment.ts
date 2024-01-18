import { Posts } from "../posts/posts";
import { Project } from "../project/project";

export class Comment {
    id:any ;
    content:any;
    date:any;
    parentId:any;
    status:any;
    userName : string
    // commentChild:any;
    // post: Posts = new Posts();
    project: Project= new Project();
    //cate: Category = new Category();
}



 

