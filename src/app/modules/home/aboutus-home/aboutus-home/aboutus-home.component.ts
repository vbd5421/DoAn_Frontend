import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

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
export class AboutusHomeComponent {
 
  animationState: string = 'inactive';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // Logic để xác định khi nào để kích hoạt animation, ví dụ:
    if (scrollPosition > 350) {
      this.animationState = 'active';
    } else {
      this.animationState = 'inactive';
    }
  }

}
