import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './modules/home/navigation/footer/footer.component';
import { HeaderComponent } from './modules/home/navigation/header/header.component';
import { HomeComponent } from './modules/home/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { BookRoomComponent } from './modules/home/booking/book-room/book-room.component';
import { AboutusHomeComponent } from './modules/home/aboutus-home/aboutus-home/aboutus-home.component';
import { ServicesOutHomeComponent } from './modules/home/service-our/services-out-home/services-out-home.component';
import { TypicalImageHomeComponent } from './modules/home/typical image/typical-image-home/typical-image-home.component';
import { CommonModule } from '@angular/common';
import { ContactHomeComponent } from './modules/home/contact/contact-home/contact-home.component';
import { RoomsListComponent } from './modules/home/rooms/rooms-list/rooms-list.component';
import { Error404Component } from './authentication/error404/error404.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { LoginAdminComponent } from './authentication/login-admin/login-admin.component';
import { LoginUserComponent } from './authentication/login-user/login-user.component';
import { SericeOurListComponent } from './modules/home/service-our/serice-our-list/serice-our-list.component';
import { BookingRoomListComponent } from './modules/home/booking/booking-room-list/booking-room-list.component';
import { RoomDetailComponent } from './modules/home/rooms/room-detail/room-detail.component';
import { RatingComponent } from './modules/home/rate/rating/rating.component';
import { ReviewAddComponent } from './modules/home/review/review-add/review-add.component';
import { ReviewsComponent } from './modules/home/review/reviews/reviews.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminControlComponent } from './modules/admin/admin-control/admin-control.component';
import { CategoryRoomControlComponent } from './modules/admin/category-room/category-room-control/category-room-control.component';
import { CategoryRoomAddComponent } from './modules/admin/category-room/category-room-add/category-room-add.component';
import { AsideComponent } from './modules/admin/aside/aside.component';
import { HeaderAdminComponent } from './modules/admin/header-admin/header-admin.component';
import { UserControlComponent } from './modules/admin/user/user-control/user-control.component';
import { UserAddComponent } from './modules/admin/user/user-add/user-add.component';
import { TagRoleComponent } from './modules/admin/user/tag-role/tag-role.component';
import { RoleControlComponent } from './modules/admin/role/role-control/role-control.component';
import { RoleAddComponent } from './modules/admin/role/role-add/role-add.component';
import { AppPageSizeComponent } from './modules/another/app-page-size/app-page-size.component';
import { ServiceOurControlComponent } from './modules/admin/service-our/service-our-control/service-our-control.component';
import { ServiceOurAddComponent } from './modules/admin/service-our/service-our-add/service-our-add.component';
import { WhyChooseComponent } from './modules/home/why-choose/why-choose.component';
import { QuestionAnswersComponent } from './modules/another/question-answers/question-answers.component';
import { HotelDetailComponent } from './modules/home/hotel/hotel-detail/hotel-detail.component';
import { HotelListHomeComponent } from './modules/home/hotel/hotel-list-home/hotel-list-home.component';
import { AccommodationCateHomeComponent } from './modules/home/accommodation-category/accommodation-cate-home/accommodation-cate-home.component';
import { AmenitiesComponent } from './modules/home/hotel/amenities/amenities.component';
import { SliderHomeComponent } from './modules/home/slider/slider-home/slider-home.component';
import { TypicalNumberHomeComponent } from './modules/home/typical-number/typical-number-home/typical-number-home.component';
import { AnimationDigitComponent } from './modules/another/animation-digit/animation-digit.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductHomeComponent } from './modules/home/product/product-home/product-home.component';
import { NewsListComponent } from './modules/home/news/news-list/news-list.component';
import { NewsDetailComponent } from './modules/home/news/news-detail/news-detail.component';
import { MemberListComponent } from './modules/home/member/member-list/member-list.component';
import { MemberDetailComponent } from './modules/home/member/member-detail/member-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    BookRoomComponent,
    AboutusHomeComponent,
    ServicesOutHomeComponent,
    TypicalImageHomeComponent,
    ContactHomeComponent,
    RoomsListComponent,
    Error404Component,
    SignUpComponent,
    LoginAdminComponent,
    LoginUserComponent,
    SericeOurListComponent,
    BookingRoomListComponent,
    RoomDetailComponent,
    RatingComponent,
    ReviewAddComponent,
    ReviewsComponent,
    AdminControlComponent,
    CategoryRoomControlComponent,
    CategoryRoomAddComponent,
    AsideComponent,
    HeaderAdminComponent,
    UserControlComponent,
    UserAddComponent,
    TagRoleComponent,
    RoleControlComponent,
    RoleAddComponent,
    AppPageSizeComponent,
    ServiceOurControlComponent,
    ServiceOurAddComponent,
    WhyChooseComponent,
    QuestionAnswersComponent,
    HotelDetailComponent,
    HotelListHomeComponent,
    AccommodationCateHomeComponent,
    AmenitiesComponent,
    SliderHomeComponent,
    TypicalNumberHomeComponent,
    AnimationDigitComponent,
    ProductHomeComponent,
    NewsListComponent,
    NewsDetailComponent,
    MemberListComponent,
    MemberDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: false,
      positionClass: 'toast-bottom-right' ,
      timeOut:2000,
    }),
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
