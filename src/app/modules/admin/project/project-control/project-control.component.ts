import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/core/model/project/project';
import { ProjectService } from 'src/app/service/project/project.service';

@Component({
  selector: 'app-project-control',
  templateUrl: './project-control.component.html',
  styleUrls: ['./project-control.component.css']
})
export class ProjectControlComponent {
  project: Project[] = []
  searchInput = '';
  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }

  constructor(private projectService: ProjectService,
    private router: Router) {
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
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchInput)
    this.projectService.getListAllPage(params).subscribe(data => {
      this.project = data.content;
      this.paging.totalRecord = data.totalElements;
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

  updateTypicalNum(id: number) {
    this.router.navigate([`admin/project/edit/${id}`]);
  }
  deleteTypicalNum(id: number) {
    let cf = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ");
    if (cf) {
      this.projectService.deleteProject(id).subscribe(() => {
        this.getAllWithPageProject();
      })
    }
  }
}
