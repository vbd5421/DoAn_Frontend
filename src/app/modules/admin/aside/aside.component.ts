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
      name:"Loại phòng",
      url: "category-room",
      icon:"fa fa-bar-chart"
    },
    {
      id:2,
      name:"dịch vụ",
      url: "dich-vu",
      icon:"fa-solid fa-utensils"
      // {
      //   "id":4,
      //   "name":"Khách hàng",
      //   "url": "customer",
      //   "icon":"far fa-handshake"
      // },
    },
   
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
      this.getUserByid(this.id)
      if(this.tokenStorageService.getToken()){
        this.userName = this.tokenStorageService.getUser().username;
        this.roleName = this.tokenStorageService.getUser().roles;
      }
      // this.getModlue()
  }
  getUserByid(id:number){
    this.userService.getUserById(id).subscribe(data=>{
      this.userById = data
      this.roleByUser=data.role
      // this.modules=this.roleByUser.moduleList
    })
  }
  // getModlue(){
  //   this.moduleService.getaside('aside.json').subscribe(data=>{
  //     this.modules=data
  //   })
  // }
  logout() {
      this.tokenStorageService.signOut();
      window.location.reload();
  }
  changeisTouch(){
    this.isTouch2.emit(this.isTouch)
    this.isTouch =! this.isTouch
  }

}
