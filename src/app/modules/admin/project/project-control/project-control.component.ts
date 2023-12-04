import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { CateProject } from 'src/app/core/model/cate-project/cate-project';
import { Member } from 'src/app/core/model/member/member';
import { Project } from 'src/app/core/model/project/project';
import { CateProjectService } from 'src/app/service/cate-project/cate-project.service';
import { ProjectService } from 'src/app/service/project/project.service';
import { ToastService } from 'src/app/service/toast/toast.service';
import { MemberService } from '../../../../service/member/member.service';

@Component({
  selector: 'app-project-control',
  templateUrl: './project-control.component.html',
  styleUrls: ['./project-control.component.css']
})
export class ProjectControlComponent {
  project: Project[] = []
  cateProject: CateProject[]=[];
  listMember:Member[] =[];
  searchInput={
    name : '',
    cate:'',
    member:'',
  }

  baseURL = Constant.BASE_URL;
  projectURL = Domain.PROJECT;
  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }

  constructor(private projectService: ProjectService, private cateProjectService:CateProjectService, private memberService:MemberService,
    private router: Router ,
    private toastService: ToastService) {
  }
  ngOnInit(): void {
    this.getAllWithPageProject();
    this.listAllCateProject();
    this.listAllMember()
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
     console.log('dự án ' , this.project)
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
  // list all thành viên
  listAllMember(){
    this.memberService.getListAllPage().subscribe(data=>{
      this.listMember=data.content; //.content
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

  updateProject(id: number) {
    this.router.navigate([`admin/project/edit/${id}`]);
  }
  deleteProject(id: number) {
    let cf = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ");
    if (cf) {
      this.projectService.deleteProject(id).subscribe(() => {
        this.getAllWithPageProject();
        this.toastService.showDelete()
      })
    }
  }
}
