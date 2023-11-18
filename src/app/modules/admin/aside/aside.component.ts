import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Role } from 'src/app/core/model/role/role';
import { User } from 'src/app/core/model/user/user';
import { TokenStorageService } from 'src/app/service/token-storage/token-storage.service';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent {

  modules =[
    {
      id:1,
      name:"con số tiêu biểu",
      url: "typical-number",
      icon:"fa-solid fa-list-ol"
    },
    {
      id:8,
      name:"chuyên mục dự án",
      url: "cate-project",
      icon:"fa fa-bar-chart"
    },
    {
      id:2,
      name:"dự án",
      url: "project",
      icon:"fa-brands fa-wpforms"
    },
    {
      id:3,
      name:"sản phẩm",
      url: "product",
      icon:"fa fa-box"
    },
    {
      id:4,
      name:"thành viên",
      url: "member",
      icon:"fa-solid fa-users-line"
    },
    {
      id:5,
      name:"tin tức",
      url: "posts",
      icon:"fa-solid fa-newspaper"
    },
    {
      id:5,
      name:"trình chiếu",
      url: "slider",
      icon:"fa-solid fa-table-columns"
    },
    {
      id:6,
      name:"ảnh nổi bật",
      url: "typical-image",
      icon:"fa-solid fa-image"
    },
    {
      id:7,
      name:"giới thiệu",
      url: "about-us",
      icon:"fa-regular fa-address-card"
    },
    {
      id:12,
      name: "Tài khoản",
      url: "user",
      icon:"far fa-user"
    }
   
  ]
  // modules: Module[]=[];
  userById: User= new User()
  roleByUser: Role = new Role()
  userName:string;
  roleName:string;

  id:number

  @Input() isTouch =true;
  @Output() isTouch2 = new EventEmitter<boolean>()
  constructor(private tokenStorageService: TokenStorageService, private userService:UserService) { }
  ngOnInit(): void {
      this.id=this.tokenStorageService.getUser().id
      if(this.tokenStorageService.getToken()){
        this.userName = this.tokenStorageService.getUser().username;
        this.roleName = this.tokenStorageService.getUser().roles;
      }
      // this.getModlue()
  }


  logout() {
      this.tokenStorageService.signOut();
      window.location.reload();
  }
  changeisTouch(){
    this.isTouch2.emit(this.isTouch)
    this.isTouch =! this.isTouch
  }

}
