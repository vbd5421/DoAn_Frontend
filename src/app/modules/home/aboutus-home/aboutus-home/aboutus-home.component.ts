import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AboutUs } from 'src/app/core/model/about-us/about-us';
import { AboutUsService } from 'src/app/service/about-us/about-us.service';

@Component({
  selector: 'app-aboutus-home',
  templateUrl: './aboutus-home.component.html',
  styleUrls: ['./aboutus-home.component.css'],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({  transform: 'translateX(-50%)' , opacity:0  })),
      state('active', style({ transform:'translateX(0)' , opacity:1 })),
      transition('inactive => active', animate('450ms ease-in')),
      transition('active => inactive', animate('450ms ease-out'))
    ])
  ]
})
export class AboutusHomeComponent implements OnInit {
 
  animationState: string = 'inactive';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // Logic để xác định khi nào để kích hoạt animation, ví dụ:
    if (scrollPosition > 250) {
      this.animationState = 'active';
    } else {
      this.animationState = 'inactive';
    }
  }

    about : AboutUs= new AboutUs();
    des:any;
    linkVideo:any;
    constructor(private aboutService:AboutUsService,
                private sanitizer: DomSanitizer,
      ){}
      ngOnInit(): void {
        this.getInformation()
      }

      getInformation(){
        this.aboutService.getAllInformation().subscribe(res=>{
          this.about = res ;
          this.des = this.sanitizer.bypassSecurityTrustHtml(this.about.description);
        this.linkVideo = this.sanitizer.bypassSecurityTrustHtml(this.about.videoLINK)
        })
      }
}
