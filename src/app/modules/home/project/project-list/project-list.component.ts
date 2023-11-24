import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Project } from 'src/app/core/model/project/project';
import { ProjectService } from 'src/app/service/project/project.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {

  project: Project[] = []
  name = '';
  baseURL = Constant.BASE_URL;
  projectURL = Domain.PROJECT;
  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }

  constructor(private projectService: ProjectService) {
  }
  ngOnInit(): void {
    this.getAllWithPageProject();
  }

  getRequestParams(page: number, pageSize: number, search: string): any {
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
    return params;
  }

  getAllWithPageProject() {
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.name)
    this.projectService.getListAllPage(params).subscribe(data => {
    this.project = data.content;
    this.paging.totalRecord = data.totalElements;
     console.log('dự án ' , this.project)
    },
      error => {
        console.error(error)
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
