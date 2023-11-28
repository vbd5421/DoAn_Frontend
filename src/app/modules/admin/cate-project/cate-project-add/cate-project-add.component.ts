import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CateProject } from 'src/app/core/model/cate-project/cate-project';
import { CateProjectService } from 'src/app/service/cate-project/cate-project.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-cate-project-add',
  templateUrl: './cate-project-add.component.html',
  styleUrls: ['./cate-project-add.component.css']
})
export class CateProjectAddComponent implements OnInit {
  cateProject: CateProject = new CateProject();
  message = '';
  id: number;
  catogaryControl = new FormControl('', Validators.required);

  constructor(
    private toast: ToastService,
    private cateProjectService: CateProjectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.cateProjectService.getCateByid(this.id).subscribe(res => {
        this.cateProject = res;
        console.log(res)
        this.catogaryControl.setValue(res.typeName);
      });
    }
  }

  onSubmit() {
    this.cateProject.typeName = this.catogaryControl.value;
    if (this.id) {
      this.update();
    } else {
      this.AddCategory();
    }
  }

  cancel() {
    window.history.back()
  }

  update() {
    console.log(this.cateProject)
    this.cateProjectService.updateCate(this.cateProject).subscribe(
      () => {
        this.toast.showSuccess();
        this.cancel();
      },
      error => {
       console.error(error)
      }
    );
  }

  AddCategory() {
    this.cateProjectService.addCategory(this.cateProject).subscribe(
      () => {
        this.toast.showSuccess();
        console.log(this.cateProject)
        this.cancel();
      },
      error => {
        console.error(error)
       }
    );
  }
}
