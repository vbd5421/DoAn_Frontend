import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AboutUs } from 'src/app/core/model/about-us/about-us';
import { AboutUsService } from 'src/app/service/about-us/about-us.service';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css']
})
export class ContactHomeComponent {
  about : AboutUs= new AboutUs();
  telephone:any;
  fax:any;
  email:any
  constructor(private aboutService:AboutUsService,
              private sanitizer: DomSanitizer,
    ){}
    ngOnInit(): void {
      this.getInformation()
    }

    getInformation(){
      this.aboutService.getAllInformation().subscribe(res=>{
        this.about = res ;
        this.telephone = this.sanitizer.bypassSecurityTrustHtml(this.about.phone);
        this.fax = this.sanitizer.bypassSecurityTrustHtml(this.about.fax);
        this.email = this.sanitizer.bypassSecurityTrustHtml(this.about.email);
      })
    }
}
