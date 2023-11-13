import {
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Member } from 'src/app/core/model/member/member';
import { Project } from 'src/app/core/model/project/project';
import { ProjectService } from 'src/app/service/project/project.service';
import { ToastService } from 'src/app/service/toast/toast.service';
@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  project: Project = new Project();
  member:Member[]=[]
  id:any;
  url: any;
  ckeConfig: any;
  baseURL = Constant.BASE_URL;
  projectURL = Domain.PROJECT;
  imageURL: any;
  disabled=false;
  fileToUpload:string [] = [];
  formProject = new FormGroup({
    moTa: new FormControl('', Validators.required),
    tieuDe: new FormControl('', Validators.required),
    // noiDung: new FormControl('' , Validators.required),
    ngayHoanThanh:new FormControl('' , Validators.required),
    ngayKetThuc: new FormControl('', Validators.required),

  });
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.projectService.getId(this.id).subscribe((data) => {
        this.project = data;
        console.log(this.project);
        this.url = this.project.image?.pathUrl;
        this.imageURL = `${this.baseURL}/${this.projectURL}/image/${this.id}`;
        this.formProject.controls['moTa'].setValue(this.project.description);
        this.formProject.controls['tieuDe'].setValue(this.project.name);
        // this.formProject.controls['noiDung'].setValue(this.project.content);
        this.formProject.controls['ngayHoanThanh'].setValue(this.project.startDate);
        this.formProject.controls['ngayKetThuc'].setValue(this.project.endDate);
      });
    }
  }
  quillConfig={
    //toolbar: '.toolbar',
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        //[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        //[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        //[{ 'direction': 'rtl' }],                         // text direction
        //[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        //[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        //[{ 'font': [] }],
        //[{ 'align': [] }],
        ['clean'],                                         // remove formatting button
        ['color'],
       ['link', 'image', 'video']  
      ],
      
    },
    "emoji-toolbar": true,
    "emoji-textarea": false,
    "emoji-shortname": true,

  }


  onSubmit() {
    this.project.name = this.formProject.controls['tieuDe'].value;
    this.project.description =this.formProject.controls['moTa'].value;
    // this.project.content =this.formProject.controls['noiDung'].value;
    this.project.startDate =this.formProject.controls['ngayHoanThanh'].value;
    this.project.endDate=this.formProject.controls['ngayKetThuc'].value;
    if (this.id) {
      this.updateDataToForm(this.id);
    } else {
      this.addProject();
    }
  }
  updateDataToForm(id:number){}
  addProject(){}
  imageChange(e: any){
    const files = e.target.files;
    if (files.length === 0) return;
    const reader = new FileReader();
    this.fileToUpload=files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) =>{
      this.imageURL= reader.result;
    }
    this.disabled=true;
  }

  goToBack(){
    window.history.back()
  }
}
