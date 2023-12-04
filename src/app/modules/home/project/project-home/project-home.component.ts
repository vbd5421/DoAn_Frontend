import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Project } from 'src/app/core/model/project/project';
import { ProjectService } from 'src/app/service/project/project.service';

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css'],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({  transform: 'translateX(100%)' , opacity:0  })),
      state('active', style({ transform:'translateX(0)', opacity:1 })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
    trigger('myAnimation2', [
      state('inactive', style({  transform: 'translateX(-100%)' , opacity:0 })),
      state('active', style({ transform:'translateX(0)' , opacity:1 })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
  ]
})
export class ProjectHomeComponent {
  animationState: string = 'inactive';
  @HostListener('window:scroll', ['$event'])
onWindowScroll(event: Event) {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  // Logic để xác định khi nào để kích hoạt animation, ví dụ:
  if (scrollPosition > 950) {
    this.animationState = 'active';
  } else {
    this.animationState = 'inactive';
  }
}


project: Project[] = []
name = '';
baseURL = Constant.BASE_URL;
projectURL = Domain.PROJECT;
paging = {
  page: 1,
  size: 4,
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
  const params = this.getRequestParams(this.paging.page, this.paging.size, this.name)
  this.projectService.getListAllPage(params).subscribe(data => {
  this.project = data.content;
  this.paging.totalRecord = data.totalElements;
  },
    error => {
      console.error(error)
    })
}

}
