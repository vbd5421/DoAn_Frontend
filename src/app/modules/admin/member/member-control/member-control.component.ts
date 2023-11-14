import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { AuthService } from 'src/app/service/auth/auth.service';
import { MemberService } from 'src/app/service/member/member.service';

@Component({
  selector: 'app-member-control',
  templateUrl: './member-control.component.html',
  styleUrls: ['./member-control.component.css']
})
export class MemberControlComponent {
  currentIndex = -1;
  totalPages: number;
  searchInput = '';
  baseURL = Constant.BASE_URL;
  memberURL = Domain.MEMBER;
  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }
  constructor(private router: Router,
    private auth: AuthService, 
    private memberService: MemberService) {
  }
  ngOnInit(): void {
    this.getMemberListAllwithPage();
  }

  getMemberListAllwithPage(){
    
  }
  search(): void {
    this.paging.page = 1;
    this.getMemberListAllwithPage();
  }
  updateMember(id: number) {
    return this.router.navigate(['admin/member/update', id]);
  }
  deleteMember(id: number) {
    let option = confirm("Bạn có chắc chắn xóa thành viên này?");
    if (option) {
      this.memberService.deleteMember(id).subscribe(() => {
        this.getMemberListAllwithPage();
      })
    }
  }
}
