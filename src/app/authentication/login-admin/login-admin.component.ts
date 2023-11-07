import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/core/model/role/role';
import { AuthService } from 'src/app/service/auth/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage/token-storage.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  url: string;
  form: any = {};
  id:number=0
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];
  role:Role = new Role()
  // moduleList: Module[]=[]

  constructor(private authService: AuthService,private userService : UserService,
     private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getToken().roles;
    }
  }

  onSubmit(): void{
    this.authService.login(this.form).subscribe(data =>{
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.roles = this.tokenStorage.getUser().roles;
        this.id = this.tokenStorage.getUser().id
        this.errorMessage ="Đăng Nhập Thành Công"
        this.getUserByid(this.id)

      },
      err => {
        this.errorMessage = "Đăng Nhập Thất Bại";
        this.isLoginFailed = true;
        console.log(err)
      });
  }
  getUserByid(id:number){
    this.userService.getUserById(id).subscribe(data=>{
      this.role=data.role
      // this.moduleList = this.role.moduleList
      // this.url=this.moduleList[0].url
      this.reloadPage(this.url);
    }
    )
  }
  reloadPage(url:string): void {
    this.router.navigate(['admin'+`/`]);
  }
  goback():void{
    window.history.back();
  }
}
