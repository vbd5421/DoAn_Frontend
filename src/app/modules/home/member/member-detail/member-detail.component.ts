import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TokenStorageService } from 'src/app/service/token-storage/token-storage.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent {

  username:string;
  userId: number;
  url: string;
  id:number

constructor(private route:ActivatedRoute ,
            private tokenStorageService: TokenStorageService,
            private toastService: ToastrService ,){}

  ngOnInit(): void {
    if(this.tokenStorageService.getToken()){
      this.username = this.tokenStorageService.getUser().username;
      this.userId = this.tokenStorageService.getUser().id;
      console.log(this.username)
    }
  }

}
