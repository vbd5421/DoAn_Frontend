import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Slider } from 'src/app/core/model/slider/slider';
import { SliderService } from 'src/app/service/slider/slider.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-slider-control',
  templateUrl: './slider-control.component.html',
  styleUrls: ['./slider-control.component.css']
})
export class SliderControlComponent implements OnInit{
  isslider: boolean = true;
  sliders: Slider[] = [];
  slider2: Slider[] = [];
  flex = '';
  target = {
    url: '',
    originalFileName:'',
    id: 1,
    name: '',
    link: '',
    active: false,
  };

  slideConfig: any;
  baseURL = Constant.BASE_URL;
  sliderURL = Domain.SLIDERS;
  imageURL: any;
  constructor(
    private sliderService: SliderService,
    private router: Router,
    private toastslide: ToastService
  ) {}

  ngOnInit(): void {
    this.getSlider();
    this.slideConfig = {
      infinite: true,
      slidesToShow: 5,
      prevArrow: false,
      nextArrow: true,
    };
    this.getSlider2();
  }

  getSlider() {
    this.sliderService.getSliders().subscribe((data) => {
      this.sliders = data;
      if (this.sliders.length > 6) {
        this.flex = 'flex-column';
      }
      this.choose(this.sliders[0]);
    });
  }
  getSlider2() {
    this.sliderService.getListAll().subscribe((data) => {
      return (this.slider2 = data);
    });
  }

  choose(e: any) {
    this.target.name = e?.name;
    this.target.originalFileName =  e?.originalFileName;
    this.target.url = e?.pathUrl;
    this.target.link = e?.url;
    this.target.id = e?.id;
    this.target.active = e?.active;
    //get image by target name
    this.imageURL = `${this.baseURL}/${this.sliderURL}/image/${this.target.name}`;
  }
  chuyenslide() {
    this.isslider = !this.isslider;
    if (this.isslider) {
      this.toastslide.chuyenchedoIMG();
    } else {
      this.toastslide.chuyenslide();
    }
  }
  updateSlider(id: number) {
    return this.router.navigate(['admin/slider/edit', id]);
  }

  hideImage(id: number) {
    this.sliderService.hideSlider(id).subscribe(() => {
      this.getSlider();
    });
  }

  show(id: number) {
    this.sliderService.showSlider(id).subscribe(() => {
      this.getSlider();
    });
  }

  deleteImage(id: number) {
    let option = confirm('Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ');
    if (option) {
      this.sliderService.deleteSlider(id).subscribe(() => {
        this.getSlider();
      });
    }
  }

}
