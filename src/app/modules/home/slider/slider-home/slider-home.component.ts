import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Slider } from 'src/app/core/model/slider/slider';
import { SliderService } from 'src/app/service/slider/slider.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-slider-home',
  templateUrl: './slider-home.component.html',
  styleUrls: ['./slider-home.component.css']
})
export class SliderHomeComponent implements OnInit {
  sliders: Slider[] = [];
    baseURL = Constant.BASE_URL;
  sliderURL = Domain.SLIDERS;
  imageURL: any;
  constructor(
    private sliderService: SliderService,

  ) {}

  
  ngOnInit(): void {
    this.getSlider();
  }

  getSlider() {
    this.sliderService.getListAll().subscribe((data) => {
      this.sliders = data;
     
    });
  }
}
