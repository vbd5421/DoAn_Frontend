import { Component } from '@angular/core';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Project } from 'src/app/core/model/project/project';
import { ProjectService } from 'src/app/service/project/project.service';

@Component({
  selector: 'app-project-more',
  templateUrl: './project-more.component.html',
  styleUrls: ['./project-more.component.css']
})
export class ProjectMoreComponent {
  projectUrl = Domain.PROJECT;
  baseURL = Constant.BASE_URL;
  projectList: Project[] = [];
  randomNumber = Math.floor(Math.random() * 2) ;
  constructor(private projectService: ProjectService) {}
  ngOnInit(): void {
    this.getListAll();
    this.shuffleItems();
  }
  

  getListAll(){
    this.projectService.getListAllPage().subscribe(data=>{
      this.projectList=data.content
    })
  }

  shuffleItems() {
    let counter = this.projectList.length;

    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      [this.projectList[counter], this.projectList[index]] = [
        this.projectList[index],
        this.projectList[counter],
      ];
    }
  }
}
