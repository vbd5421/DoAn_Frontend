import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';
import { User } from 'src/app/core/model/user/user';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isSignUpFailed: any;
  isSuccessful: any;
  errorMessage = "";
  form: any = {};

  constructor(private authService: AuthService,) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.register(this.form).subscribe(data => {
      this.isSuccessful = true;
      this.isSignUpFailed = false;
      this.errorMessage = "Đăng ký thành công!!"
    },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.errorMessage = "Đăng ký thất bại!!"
      })
  }
}
