import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Project } from 'src/app/core/model/project/project';
import { ProjectService } from 'src/app/service/project/project.service';
import { TokenStorageService } from 'src/app/service/token-storage/token-storage.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
  baseURL = Constant.BASE_URL;
  username:string
  url:any;
  id:any;
  content:any;
  project: Project=new Project()

  constructor(private projectService:ProjectService, 
    private route:ActivatedRoute,
    private tokenStorageService: TokenStorageService,
    private sanitizer:DomSanitizer){}

  ngOnInit(): void {
    if(this.tokenStorageService.getToken()){
      this.username = this.tokenStorageService.getUser().username;
    }
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
