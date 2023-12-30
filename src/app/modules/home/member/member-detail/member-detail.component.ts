import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Member } from 'src/app/core/model/member/member';
import { MemberService } from 'src/app/service/member/member.service';
import { TokenStorageService } from 'src/app/service/token-storage/token-storage.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent {
  username:string;
  baseURL = Constant.BASE_URL;
  memberURL = Domain.MEMBER;
  member :Member = new Member();
  externalMember:Member = new Member();
  url: string;
  imageURL:any

constructor(private route:ActivatedRoute ,
            private tokenStorageService: TokenStorageService,
            private toastService: ToastrService , 
            private sanitizer : DomSanitizer ,
            private memberService: MemberService){}

  ngOnInit(): void {
    if(this.tokenStorageService.getToken()){
      this.username = this.tokenStorageService.getUser().username;
    }
    this.getMemberDetail()
  }

  getMemberDetail(){
    this.url = this.route.snapshot.params['url'];
    this.memberService.getByUrl(this.url).subscribe(data=>{
      this.member = data ;
      this.imageURL = `${this.baseURL}/${this.memberURL}/image/${this.member.id}`;
    })
  }

  addExternalProject(){
    
  }
 
}
