import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Member } from 'src/app/core/model/member/member';
import { Project } from 'src/app/core/model/project/project';
import { MemberService } from 'src/app/service/member/member.service';
import { ProjectService } from 'src/app/service/project/project.service';
import { ToastService } from 'src/app/service/toast/toast.service';
@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  project: Project = new Project();
  listMember: Member[] = [];
  id: any;
  url: any;
  baseURL = Constant.BASE_URL;
  projectURL = Domain.PROJECT;
  imageURL: any;
  disabled = false;
  fileToUpload: string[] = [];
  selectedFile: File;
  fileName: any;
  formProject = new FormGroup({
    moTa: new FormControl('', Validators.required),
    tieuDe: new FormControl('', Validators.required),
    //noiDung: new FormControl('' , Validators.required),
    // ngayHoanThanh: new FormControl('', Validators.required),
    // ngayKetThuc: new FormControl('', Validators.required),
  });
  constructor(
    private memberService : MemberService,
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    window.sessionStorage.removeItem('redirect');
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.projectService.getId(this.id).subscribe((data) => {
        this.project = data;
        console.log(this.project);
        this.url = this.project.image?.pathUrl;
        this.imageURL = `${this.baseURL}/${this.projectURL}/image/${this.project.id}`;
        this.memberUpdate(this.project)
        this.formProject.controls['moTa'].setValue(this.project.description);
        this.formProject.controls['tieuDe'].setValue(this.project.name);
        //this.formProject.controls['noiDung'].setValue(this.project.content);
        // this.formProject.controls['ngayHoanThanh'].setValue(this.project.startDate);
        // this.formProject.controls['ngayKetThuc'].setValue(this.project.endDate);
      });
    }
    
    this.listAllMember()
    
   
  }
  quillConfig = {
    //toolbar: '.toolbar',
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
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

  }

  onSubmit() {
    this.project.name = this.formProject.controls['tieuDe'].value;
    this.project.description = this.formProject.controls['moTa'].value;
    //this.project.content =this.formProject.controls['noiDung'].value;
    // this.project.startDate = this.formProject.controls['ngayHoanThanh'].value;
    // this.project.endDate = this.formProject.controls['ngayKetThuc'].value;
    if (this.id) {
      this.updateDataToForm(this.id  );
    } else {
      this.addProject();
    }
  }

  prepareFormData(project: Project): FormData {
    const formData = new FormData();
    formData.append('project',
      new Blob([JSON.stringify(project)], { type: 'application/json' })
    );
    console.log(formData);
   // formData.append('imageFile', this.fileToUpload, this.fileToUpload.name);
   for (let i = 0; i < this.fileToUpload.length; i++) {
    formData.append(
      'file',
      this.fileToUpload[i]
      // this.fileToUpload[i].name
    );
  }
    return formData;
  }

  updateDataToForm(id: number  ){
    const projectFormData = this.prepareFormData(this.project);
    this.projectService.updateProject(id, projectFormData).subscribe(
      (data) => {
        this.toastService.showSuccess();
        this.goToBack();
      },
      (error) => {
        // this.toastService.showWarning(error.error);
        console.log(error);
      }
    );
   }

  addProject(){
    const projectFormData = this.prepareFormData(this.project);
    this.projectService.addProject(projectFormData).subscribe(
      () => {
        this.toastService.showSuccess();
        this.goToBack();
      },
      (error) => {
        // this.toastService.showWarning(error.error);
        console.log(error);
      }
    );
  }
  imageChange(e: any) {
    const files = e.target.files;
    if (files.length === 0) return;
    const reader = new FileReader();
    this.fileToUpload = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageURL = reader.result;
    }
    this.disabled = true;
  }

  goToBack() {
    this.router.navigate(['/admin/project']);
  }
  // member
  memberUpdate(pro:Project){
    this.memberService.getListAllPage().subscribe((data) => {
      this.listMember = data;
      if (pro.members != null) {
        const sid = pro.members.map((item) => item.id);
        for (let i = 0; i < sid.length; i++) {
          this.listMember.find((e) => {
            if (e.id === sid[i]) e.selected = true;
          });
        }
      }
    });
  }
  listAllMember(){
    this.memberService.getListAllPage().subscribe(data=>{
      this.listMember=data.content
      console.log(this.listMember)
    })
  }

  onCheckChangeProduct(event: any, memberr: Member) {
    memberr.selected = event.currentTarget.checked;
    if (memberr.selected) {
      this.project.members.push(memberr);
      console.log(this.project.members) 
    } else {
      this.project.members.forEach((item) => {
        if (item.id === memberr.id) {
          if (this.project.members) {
            this.project.members = this.project.members.filter(
              (i) => i !== item 
            );
          }
        }
      });
    }
  }

}
