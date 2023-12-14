import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/core/model/role/role';
import { User } from 'src/app/core/model/user/user';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ToastService } from 'src/app/service/toast/toast.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  user : User = new User();
  roles :Role[] = [];
  roleById = new Role()
  id: any;
  roll: any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = "";
  type: any;
  submitFail = false;
  roleId= new FormControl()
  userForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    userName : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    active : new FormControl(''),
    role : new FormControl(0),

  })

  constructor(private authService: AuthService,private userService: UserService,
              private router: Router,private route:ActivatedRoute ,
              private toastService: ToastService ) {

  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.getUserById(this.id)
      // this.getRoleUpdate(this.user);
    }

  }
  setValueForm() {
    this.userForm.setValue({
      firstName : this.user.firstName,
      lastName : this.user.lastName,
      userName : this.user.username,
      email : this.user.email,
      password : '',
      active : this.user.active,
      role : this.user.role.id,
    })
  }
  getValueForm() {
    this.user.firstName = this.userForm.controls['firstName'].value
    this.user.lastName = this.userForm.controls['lastName'].value
    this.user.username = this.userForm.controls['userName'].value
    this.user.email = this.userForm.controls['email'].value
    this.user.active = this.userForm.controls['active'].value
    this.user.password = this.userForm.controls['password'].value
  }


  getUserById(id: number) {
    this.userService.getUserById(id).subscribe(dt=>{
      this.user=dt;
      //this.getRoleUpdate();
      //this.setValueForm()
    })
  }

  getRoleUpdate(){
    // this.roleService.listRole().subscribe(data => {
    //   this.roles = data;
    //   })

      // if(user.role != null){
      //   const sid = user.role.map(item => item.id);
      //   for (let i=0; i<sid.length; i++){
      //     this.roles.find( e => {
      //       if(e.id === sid[i]) e.selected = true;
      //     })
      //   }
      // }
      // console.log(this.roles)
  }
  // getRolebyId(id:any){
  //   this.roleService.getRolebyId(id).subscribe(data=>{
  //     this.user.role = data
  //   })
  //   }

  // onRoleChange(event: any, role: Role){
  //   role.selected = event.currentTarget.checked;
  //   if(role.selected){
  //     this.user.role.push(role);
  //   }else{
  //     this.user.role.forEach(item => {
  //       if(item.id === role.id){
  //         this.user.role = this.user.role.filter(i => i !== item);
  //       }
  //     })
  //   }
  // }
  onModulechange(event:any){
    // module.status=event.currentTarget.checked;
    // if(module.status){
    //   this.module.push(role);
    // }else{
    //   this.roles.module.forEach(item => {
    //     if(item.id === aside.id){
    //       this.role.module = this.user.module.filter(i => i !== item);
    //     }
    //   })
    // }
  }

  goToUserList(){
    return this.router.navigate([`admin/user`])
  }

  updateUser(id: number){
    this.getValueForm()
    console.log(this.user)
    this.userService.updateUser(id,this.user).subscribe( data =>{
      this.toastService.showSuccess();
      this.goToUserList();
    },error => {
      this.toastService.showWarning(error.error);
      console.log(error);
    })
  }

  onCheckChange(event: any, user: User){
    user.active = event.currentTarget.checked;
  }

  goToBack() {
    this.router.navigate(['/admin/user']);
    // window.history.back();
  }

  onSubmit() {
    if(this.id){
      this.updateUser(this.id);
    }else{
      this.getValueForm()
      this.authService.register(this.user).subscribe(data =>{
          
          console.log(this.user)
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.goToBack()
          this.toastService.showSuccess()
          // this.errorMessage = "Đăng ký thành công!!"
        },
        error =>{
          // this.toastService.showWarning(error.error)
          this.errorMessage = "Đăng ký thất bại!!";
          this.isSignUpFailed = true;
          console.log(error);
        })
        // this.authService.register(this.form).subscribe(data => {
        //   console.log(this.form);
        //   this.isSuccessful = true;
        //   this.isSignUpFailed = false;
        //   this.errorMessage = "Đăng ký thành công!!"
        // },
        //   err => {
        //     this.errorMessage = err.error.message;
        //     this.isSignUpFailed = true;
        //     this.errorMessage = "Đăng ký thất bại!!"
        //   })
    }
  }

  changePassword(id:number) {
    this.userService.changePassword(id);
    
  }
  selectRole(){
    //this.getRolebyId(this.userForm.controls['role'].value);
  }
}
