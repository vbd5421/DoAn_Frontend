import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Project } from 'src/app/core/model/project/project';
import { ProjectService } from 'src/app/service/project/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
  baseURL = Constant.BASE_URL;
  url:any;
  id:any;
  content:any;
  project: Project=new Project()

  constructor(private projectService:ProjectService, 
    private route:ActivatedRoute,
    private sanitizer:DomSanitizer){}

  ngOnInit(): void {
    this.getList()
  }
  getList(){
    this.url = this.route.snapshot.params['url'];
    this.projectService.getByUrl(this.url).subscribe(data => {
      this.project = data;
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.project.content);
      console.log(data)
    })
  }
}
