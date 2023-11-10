import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css'],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({  transform: 'translateX(100%)' , opacity:0  })),
      state('active', style({ transform:'translateX(0)', opacity:1 })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
    trigger('myAnimation2', [
      state('inactive', style({  transform: 'translateX(-100%)' , opacity:0 })),
      state('active', style({ transform:'translateX(0)' , opacity:1 })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ]),
  ]
})
export class ProjectHomeComponent {
  animationState: string = 'inactive';
  @HostListener('window:scroll', ['$event'])
onWindowScroll(event: Event) {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  // Logic để xác định khi nào để kích hoạt animation, ví dụ:
  if (scrollPosition > 1110) {
    this.animationState = 'active';
  } else {
    this.animationState = 'inactive';
  }
}

}
