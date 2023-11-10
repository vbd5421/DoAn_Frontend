import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-why-choose',
  templateUrl: './why-choose.component.html',
  styleUrls: ['./why-choose.component.css'],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({  opacity:0  })),
      state('active', style({ opacity:1  })),
      transition('inactive => active', animate('0.5s ease-in')),
      transition('active => inactive', animate('600ms ease-out'))
    ]),
    trigger('myAnimation2', [
      state('inactive', style({ opacity:0  })),
      state('active', style({opacity:1  })),
      transition('inactive => active', animate('1.5s ease-in')),
      transition('active => inactive', animate('600ms ease-out'))
    ]),
    trigger('myAnimation3', [
      state('inactive', style({ opacity:0  })),
      state('active', style({opacity:1  })),
      transition('inactive => active', animate('2.5s ease-in')),
      transition('active => inactive', animate('600ms ease-out'))
    ]),
    trigger('myAnimation4', [
      state('inactive', style({ opacity:0  })),
      state('active', style({opacity:1  })),
      transition('inactive => active', animate('3.5s ease-in')),
      transition('active => inactive', animate('600ms ease-out'))
    ]),
  ]
})
export class WhyChooseComponent {

  animationState: string = 'inactive';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // Logic để xác định khi nào để kích hoạt animation, ví dụ:
    if (scrollPosition > 3600) {
      this.animationState = 'active';
    } else {
      this.animationState = 'inactive';
    }
  }
}
