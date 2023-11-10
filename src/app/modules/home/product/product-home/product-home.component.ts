import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css'],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({  transform: 'translateY(-60%)' , opacity:0  })),
      state('active', style({ transform:'translateY(0)' ,opacity:1  })),
      transition('inactive => active', animate('600ms ease-in')),
      transition('active => inactive', animate('600ms ease-out'))
    ]),
  ]
})
export class ProductHomeComponent {
  animationState: string = 'inactive';
  @HostListener('window:scroll', ['$event'])
onWindowScroll(event: Event) {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  // Logic để xác định khi nào để kích hoạt animation, ví dụ:
  if (scrollPosition > 1940) {
    this.animationState = 'active';
  } else {
    this.animationState = 'inactive';
  }
}

}
