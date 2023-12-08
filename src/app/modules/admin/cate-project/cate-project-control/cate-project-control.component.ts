import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { CateProject } from 'src/app/core/model/cate-project/cate-project';
import { AuthService } from 'src/app/service/auth/auth.service';
import { CateProjectService } from 'src/app/service/cate-project/cate-project.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-cate-project-control',
  templateUrl: './cate-project-control.component.html',
  styleUrls: ['./cate-project-control.component.css']
})
export class CateProjectControlComponent  implements OnInit{

  listCateProject: CateProject[] = [];

  baseURL = Constant.BASE_URL;

  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }
  searchInput = {
    name :'',
  }
  constructor(private router: Router,
    private auth: AuthService,
    private cateProjectService: CateProjectService,
    private toast:ToastService) {
  }
  ngOnInit(): void {
    this.getCateProjectListAllwithPage();
  }
  getRequestParams(page: number, pageSize: number, name: string ): any {
    let params: any = {};

    if (page) {
      params[`pageNo`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if (name) {
      params[`search`] = name;
    }
    return params;
  }
  getCateProjectListAllwithPage(){
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchInput.name  )
    this.cateProjectService.listPageSize(params).subscribe(data => {
      this.listCateProject = data.content;
      this.paging.totalRecord = data.totalElements;
      console.log('cm dự án' , this.listCateProject)
    },
      error => {
        console.log(error);
      }
    )
  }
  search(): void {
    this.paging.page = 1;
    this.getCateProjectListAllwithPage();
  }
  handlePageChange(event: number): void {

    this.paging.page = event;
    this.getCateProjectListAllwithPage();
  }
  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;

    this.getCateProjectListAllwithPage();
  }
  updateCateProject(id: number) {
    return this.router.navigate(['admin/cate-project/edit', id]);
  }
  deleteCateProject(id: number) {
    let option = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục");
    if (option) {
      this.cateProjectService.deleteCate(id).subscribe(() => {
        this.getCateProjectListAllwithPage();
        this.toast.showDelete()
      })
    }
  }
}
