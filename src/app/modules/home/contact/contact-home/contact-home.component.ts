import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { AboutUs } from 'src/app/core/model/about-us/about-us';
import { Contact } from 'src/app/core/model/contact/contact';
import { AboutUsService } from 'src/app/service/about-us/about-us.service';
import { ContactService } from 'src/app/service/contact/contact.service';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.css']
})
export class ContactHomeComponent {
  about : AboutUs= new AboutUs();
  telephone:any;
  fax:any;
  email:any;
  contact: Contact=new Contact();
  constructor(private aboutService:AboutUsService,
              private sanitizer: DomSanitizer,
              private contactService: ContactService,
              private toastService:ToastrService,
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
    onSubmit(){
      this.SendContact()
     }
  SendContact(){
    this.contactService.AddContact(this.contact).subscribe(()=>{
      this.toastService.success('Bạn đã gửi thành công',);
      setTimeout(() => {
        location.reload()
      }, 1000);

    },
    err=>{
      console.log(err)
    }
    )
}
 //mã ACII
 numberOnly(event:any): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  const input = event.target ; // Lấy đối tượng input
  if (input.value.length >= 10) {
    // alert('')
  return false;
  }
  return true;

}
}
