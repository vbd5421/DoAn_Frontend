import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/core/model/role/role';
import { User } from 'src/app/core/model/user/user';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css']
})
export class UserControlComponent {
  users: User[] = [];
  searchInput = '';
  paging = {
    page: 1,
    size: 9,
    totalRecord: 0,
  };

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getrequestparams( search: string) {
    let params: any = {};

    // if (page) {
    //   params[`pageNo`] = page;
    // }

    // if (pageSize) {
    //   params[`pageSize`] = pageSize;
    // }

    if (search) {
      params[`search`] = search;
    }
    return params;
  }

  getAllUser() {
    const params = this.getrequestparams( this.searchInput);
    this.userService.getListAllwithpageUser(params).subscribe(data => {
        this.users = data;
        // this.paging.totalRecord = data.totalElements;
        console.log(data)
      },
      error => {
        console.log(error);
      }
    );
  }


  search(): void {
    this.paging.page = 1;
    this.getAllUser();
  }

  // handlepagechange(event: number): void {
  //   console.log(event);
  //   this.paging.page = event;
  //   this.getAllUser();
  // }

  // handlepagesizechange(event: any): void {
  //   this.paging.size = event;
  //   this.paging.page = 1;
  //   this.getAllUser();
  //   console.log(this.paging.size);
  // }
  updateUser(id: number) {
    return this.router.navigate([`admin/user/edit/${id}`]);
  }


  deleteUser(id: number) {
    let option = confirm('Bạn có chắc chắn xóa người dùng này?');
    if (option) {
      this.userService.deleteUser(id).subscribe(() => {
        this.getAllUser();
      });
    }
  }
}
