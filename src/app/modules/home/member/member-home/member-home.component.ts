import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Member } from 'src/app/core/model/member/member';
import { AuthService } from 'src/app/service/auth/auth.service';
import { MemberService } from 'src/app/service/member/member.service';
import { ToastService } from 'src/app/service/toast/toast.service';
import {AboutUs} from "../../../../core/model/about-us/about-us";
import {Address} from "../../../../core/model/address/address";
import {AboutUsService} from "../../../../service/about-us/about-us.service";
import {DomSanitizer} from "@angular/platform-browser";
import {AddressService} from "../../../../service/address/address.service";

@Component({
  selector: 'app-member-home',
  templateUrl: './member-home.component.html',
  styleUrls: ['./member-home.component.css'],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({  transform: 'translateY(-70%)' , opacity:0  })),
      state('active', style({ transform:'translateY(0)' ,opacity:1  })),
      transition('inactive => active', animate('600ms ease-in')),
      transition('active => inactive', animate('600ms ease-out'))
    ]),
    trigger('myAnimation2', [
      state('inactive', style({  transform: 'translateY(70%)' , opacity:0  })),
      state('active', style({ transform:'translateY(0)' ,opacity:1  })),
      transition('inactive => active', animate('600ms ease-in')),
      transition('active => inactive', animate('600ms ease-out'))
    ]),
  ]
})
export class MemberHomeComponent {
  animationState: string = 'inactive';
  @HostListener('window:scroll', ['$event'])
onWindowScroll(event: Event) {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  // Logic để xác định khi nào để kích hoạt animation, ví dụ:
  if (scrollPosition > 2430) {
    this.animationState = 'active';
  } else {
    this.animationState = 'inactive';
  }
}

about : AboutUs= new AboutUs();
memberIntro:any
listMember: Member[] = [];
baseURL = Constant.BASE_URL;
memberURL = Domain.MEMBER;
paging = {
  page: 1,
  size: 2,
  totalRecord: 0
}
searchInput = {
  name :'',
}
constructor(private router: Router,
  private memberService: MemberService,
  private sanitizer: DomSanitizer,
  private aboutService:AboutUsService,) {
}
ngOnInit(): void {
  this.getMemberListAllwithPage();
  this.getInformation()
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
getInformation(){
    this.aboutService.getAllInformation().subscribe(res=>{
      this.about = res ;
      this.memberIntro = this.sanitizer.bypassSecurityTrustHtml(this.about.member);

    })
  }
}
