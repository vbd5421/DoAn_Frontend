
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AboutUs } from 'src/app/core/model/about-us/about-us';
import { Address } from 'src/app/core/model/address/address';
import { AboutUsService } from 'src/app/service/about-us/about-us.service';
import { AddressService } from 'src/app/service/address/address.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],

})
export class FooterComponent {
  about : AboutUs= new AboutUs();
  addressList : Address[]=[]
  telephone:any;
  fax:any;
  email:any;
  des:any;
  emailLink:any;
  constructor(private aboutService:AboutUsService,
              private sanitizer: DomSanitizer,
              private addressService : AddressService
    ){}
    ngOnInit(): void {
      this.getInformation()
      this.getListAddress()
    }

    getInformation(){
      this.aboutService.getAllInformation().subscribe(res=>{
        this.about = res ;
        this.des = this.sanitizer.bypassSecurityTrustHtml(this.about.description)
        this.telephone = this.sanitizer.bypassSecurityTrustHtml(this.about.phone);
        this.fax = this.sanitizer.bypassSecurityTrustHtml(this.about.fax);
        this.email = this.sanitizer.bypassSecurityTrustHtml(this.about.email);
        this.emailLink  = "mailto:" + encodeURIComponent(this.email);
      })
    }

    getListAddress() {
      this.addressService.ListAll().subscribe((res) => {
        this.addressList = res;
        console.log(res)
      });
    }

}
