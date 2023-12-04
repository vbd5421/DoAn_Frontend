import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Member } from 'src/app/core/model/member/member';
import { AuthService } from 'src/app/service/auth/auth.service';
import { MemberService } from 'src/app/service/member/member.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent {
  listMember: Member[] = [];
  baseURL = Constant.BASE_URL;
  memberURL = Domain.MEMBER;
  paging = {
    page: 1,
    size: 12,
    totalRecord: 0
  }
  searchInput = {
    name :'',
  }
  constructor(private router: Router,
    private auth: AuthService, 
    private memberService: MemberService,
    private toast:ToastService) {
  }
  ngOnInit(): void {
    this.getMemberListAllwithPage();
  }
  getRequestParams(page: number, pageSize: number, name: any ): any {
    let params: any = {};

    if (page) {
      params[`pageNo`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if (name) {
      params[`search`] = name;
    }
    return params;
  }
  getMemberListAllwithPage(){
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchInput.name  )
    this.memberService.getListAllPage(params).subscribe(data => {
      this.listMember = data.content;
      this.paging.totalRecord = data.totalElements;
      
    },
      error => {
        console.log(error);
      }
    )
  }

  handlePageChange(event: number): void {
    this.paging.page = event;
    this.getMemberListAllwithPage();
  }

}
