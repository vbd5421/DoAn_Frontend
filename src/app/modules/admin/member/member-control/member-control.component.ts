import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Member } from 'src/app/core/model/member/member';
import { AuthService } from 'src/app/service/auth/auth.service';
import { MemberService } from 'src/app/service/member/member.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-member-control',
  templateUrl: './member-control.component.html',
  styleUrls: ['./member-control.component.css']
})
export class MemberControlComponent {
  listMember: Member[] = [];

  currentIndex = -1;
  totalPages: number;

  baseURL = Constant.BASE_URL;
  memberURL = Domain.MEMBER;
  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }
  searchInput = {
    name :'',
    degree:'',
    position:'',
  }
  constructor(private router: Router,
    private auth: AuthService, 
    private memberService: MemberService,
    private toast:ToastService) {
  }
  ngOnInit(): void {
    this.getMemberListAllwithPage();
  }
  getRequestParams(page: number, pageSize: number, name: string ): any {
    let params: any = {};

    if (page) {
      params[`pageNo`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if (name) {
      params[`name`] = name;
      // params[`position`] = name;
      // params[`degree`] = name;
    }
    // if(position){
    //   params[`position`] = position;
    // }
    // if(degree){
    //   params[`degree`] = degree;
    // }
    return params;
  }
  getMemberListAllwithPage(){
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchInput.name  )
    this.memberService.getListAllPage(params).subscribe(data => {
      console.log(data)
      this.listMember = data.content;
      this.paging.totalRecord = data.totalElements;
      console.log('thành viên' , this.listMember)
    },
      error => {
        console.log(error);
      }
    )
  }
  search(): void {
    this.paging.page = 1;
    this.getMemberListAllwithPage();
  }
  handlePageChange(event: number): void {
    console.log(event);
    this.paging.page = event;
    this.getMemberListAllwithPage();
  }
  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    console.log(event, this.paging.size)
    this.getMemberListAllwithPage();
  }
  updateMember(id: number) {
    return this.router.navigate(['admin/member/edit', id]);
  }
  deleteMember(id: number) {
    let option = confirm("Bạn có chắc chắn xóa thành viên này?");
    if (option) {
      this.memberService.deleteMember(id).subscribe(() => {
        this.getMemberListAllwithPage();
        this.toast.showDelete()
      })
    }
  }
}
