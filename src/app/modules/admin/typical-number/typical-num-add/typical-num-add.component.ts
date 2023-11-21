import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypicalNumber } from 'src/app/core/model/typical-number/typical-number';
import { ToastService } from 'src/app/service/toast/toast.service';
import { TypicalNumberService } from 'src/app/service/typical-number/typical-number.service';

@Component({
  selector: 'app-typical-num-add',
  templateUrl: './typical-num-add.component.html',
  styleUrls: ['./typical-num-add.component.css']
})
export class TypicalNumAddComponent {
  formNumber = new FormGroup({
    numberic: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    icons: new FormControl('',Validators.required),
  });
  tNumber: TypicalNumber =new TypicalNumber()
  id: any;
  allIcon: any;

  constructor(
    private numService: TypicalNumberService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastService,
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.numService.getNumberById(this.id).subscribe((data) => {
        this.tNumber = data;
        console.log(this.tNumber)
        this.formNumber.controls['numberic'].setValue(this.tNumber.num);
        this.formNumber.controls['icons'].setValue(this.tNumber.icon);
        this.formNumber.controls['description'].setValue(
          this.tNumber.description
        );
      });
    }
    this.formNumber.get("icons")?.setValue("")
    this.getListIcon();
  }

  getListIcon() {
    this.numService.getListIconJson('icon.json').subscribe((data) => {
      this.allIcon = data;
    });
  }

  rollbackToList() {
    window.history.back();
  }

  onSubmit() {
    this.tNumber.num= this.formNumber.controls['numberic'].value;
    this.tNumber.icon= this.formNumber.controls['icons'].value;
    this.tNumber.description = this.formNumber.controls['description'].value;
    if (this.id) {
      this.update(this.id, this.tNumber);
    } else {
      this.addtNumber();
    }
  }

  update(id: number, tNumber: TypicalNumber) {
    this.numService.updateNumber(tNumber, id).subscribe(() => {
        this.toast.showUpdate()
        this.rollbackToList();
      },
      (error) => {
        // this.toast.showWarning(error.error);
        console.log(error.error);
      }
    );
  }

  addtNumber() {
    this.numService.addNumber(this.tNumber).subscribe(data => {
        this.toast.showSuccess();
        this.rollbackToList();
      },
      (error) => {
        // this.toast.showWarning(error.error);
        console.log(error);
      }
    );
  }
}
