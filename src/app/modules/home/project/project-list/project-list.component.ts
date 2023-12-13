import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { CateProject } from 'src/app/core/model/cate-project/cate-project';
import { Project } from 'src/app/core/model/project/project';
import { CateProjectService } from 'src/app/service/cate-project/cate-project.service';
import { ProjectService } from 'src/app/service/project/project.service';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

  project: Project[] = []
  cateProject: CateProject[]=[];
  searchInput={
    name : '',
    cate:'',
  }
  baseURL = Constant.BASE_URL;
  projectURL = Domain.PROJECT;
  paging = {
    page: 1,
    size: 6,
    totalRecord: 0
  }

  constructor(private projectService: ProjectService ,
        private toast:ToastrService , private cateProjectService:CateProjectService ) {
  }
  ngOnInit(): void {
    this.getAllWithPageProject();
    this.listAllCateProject();
  }

  getRequestParams(page: number, pageSize: number, search: string , cate:any): any {
    let params: any = {};
    if (page) {
      params[`pageNo`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if (search) {
      params[`name`] = search;
    }
    if(cate){
      params[`cateId`] = cate
    }
    return params;
  }

  getAllWithPageProject() {
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchInput.name , this.searchInput.cate)
    this.projectService.getListAllPage(params).subscribe(data => {
    this.project = data.content;
    this.paging.totalRecord = data.totalElements;
     
    },
      error => {
        console.error(error)
      })
  }
  // chuyên mục dự án
  listAllCateProject(){
    this.cateProjectService.listAllCate().subscribe(res=>{
      this.cateProject = res;
    })
  }

  search(): void {
    this.paging.page = 1;
    this.getAllWithPageProject();
  }
  handlePageChange(event: number): void {
    console.log(event);
    this.paging.page = event;
    this.getAllWithPageProject();
  }
  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    console.log(event, this.paging.size)
    this.getAllWithPageProject();
  }

}
