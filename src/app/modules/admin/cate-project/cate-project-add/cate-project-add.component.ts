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
      this.cateProjectService.GetCateByid(this.id).subscribe((res) => {
        this.cateProject = res;
        this.catogaryControl.setValue(res.typeName);
      });
    }
  }

  onSubmit() {
    this.cateProject.typeName = this.catogaryControl.value;
    if (this.id) {
      this.update(this.id, this.cateProject);
    } else {
      this.AddCategory();
    }
  }

  cancel() {
    window.history.back()
  }

  update(id: number, category: CateProject) {
    this.cateProjectService.UpdateCate(id, category).subscribe(
      () => {
        this.toast.showSuccess();
        this.cancel();
      },
      (error) => {
        this.toast.showWarning(error.error);
      }
    );
  }

  AddCategory() {
    this.cateProjectService.AddCategory(this.cateProject).subscribe(
      () => {
        this.toast.showSuccess();
        this.cancel();
      },
      (error) => {
        this.toast.showWarning(error.error);
      }
    );
  }
}
