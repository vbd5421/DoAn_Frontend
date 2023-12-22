import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FooterComponent } from './modules/home/navigation/footer/footer.component';
import { HeaderComponent } from './modules/home/navigation/header/header.component';
import { HomeComponent } from './modules/home/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { AboutusHomeComponent } from './modules/home/aboutus-home/aboutus-home/aboutus-home.component';
import { TypicalImageHomeComponent } from './modules/home/typical image/typical-image-home/typical-image-home.component';
import { CommonModule } from '@angular/common';
import { ContactHomeComponent } from './modules/home/contact/contact-home/contact-home.component';
import { Error404Component } from './authentication/error404/error404.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { LoginAdminComponent } from './authentication/login-admin/login-admin.component';
import { LoginUserComponent } from './authentication/login-user/login-user.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminControlComponent } from './modules/admin/admin-control/admin-control.component';
import { AsideComponent } from './modules/admin/aside/aside.component';
import { HeaderAdminComponent } from './modules/admin/header-admin/header-admin.component';
import { UserControlComponent } from './modules/admin/user/user-control/user-control.component';
import { UserAddComponent } from './modules/admin/user/user-add/user-add.component';
import { TagRoleComponent } from './modules/admin/user/tag-role/tag-role.component';
import { RoleControlComponent } from './modules/admin/role/role-control/role-control.component';
import { RoleAddComponent } from './modules/admin/role/role-add/role-add.component';
import { AppPageSizeComponent } from './modules/another/app-page-size/app-page-size.component';
import { WhyChooseComponent } from './modules/home/why-choose/why-choose.component';
import { SliderHomeComponent } from './modules/home/slider/slider-home/slider-home.component';
import { TypicalNumberHomeComponent } from './modules/home/typical-number/typical-number-home/typical-number-home.component';
import { AnimationDigitComponent } from './modules/another/animation-digit/animation-digit.component';
import { ProductHomeComponent } from './modules/home/product/product-home/product-home.component';
import { MemberListComponent } from './modules/home/member/member-list/member-list.component';
import { MemberDetailComponent } from './modules/home/member/member-detail/member-detail.component';
import { MemberHomeComponent } from './modules/home/member/member-home/member-home.component';
import { LinkWebHomeComponent } from './modules/home/link-web/link-web-home/link-web-home.component';
import { ProductListComponent } from './modules/home/product/product-list/product-list.component';
import { ProductDetailComponent } from './modules/home/product/product-detail/product-detail.component';
import { AboutUsComponent } from './modules/home/aboutus-home/about-us/about-us.component';
import { AboutUsUavComponent } from './modules/home/aboutus-home/about-us-uav/about-us-uav.component';
import { ProjectHomeComponent } from './modules/home/project/project-home/project-home.component';
import { ProjectListComponent } from './modules/home/project/project-list/project-list.component';
import { ProjectDetailComponent } from './modules/home/project/project-detail/project-detail.component';
import { TypicalNumControlComponent } from './modules/admin/typical-number/typical-num-control/typical-num-control.component';
import { TypicalNumAddComponent } from './modules/admin/typical-number/typical-num-add/typical-num-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectAddComponent } from './modules/admin/project/project-add/project-add.component';
import { ProjectControlComponent } from './modules/admin/project/project-control/project-control.component';
import { ProductAddComponent } from './modules/admin/product/product-add/product-add.component';
import { ProductControlComponent } from './modules/admin/product/product-control/product-control.component';
import { QuillModule } from 'ngx-quill';
import { MemberAddComponent } from './modules/admin/member/member-add/member-add.component';
import { MemberControlComponent } from './modules/admin/member/member-control/member-control.component';
import { SliderAddComponent } from './modules/admin/slider/slider-add/slider-add.component';
import { SliderControlComponent } from './modules/admin/slider/slider-control/slider-control.component';
import { AboutControlComponent } from './modules/admin/about/about-control/about-control.component';
import { AboutAddressComponent } from './modules/admin/about/about-address/about-address.component';
import { TypicalImageAddComponent } from './modules/admin/typical-image/typical-image-add/typical-image-add.component';
import { TypicalImageControlComponent } from './modules/admin/typical-image/typical-image-control/typical-image-control.component'
import { NgbTooltipModule  } from '@ng-bootstrap/ng-bootstrap';
import { NgxSummernoteModule } from 'ngx-summernote';
import { PostsListComponent } from './modules/home/posts/posts-list/posts-list.component';
import { PostsMoreComponent } from './modules/home/posts/posts-more/posts-more.component';
import { PostsDetailComponent } from './modules/home/posts/posts-detail/posts-detail.component';
import { PostAddComponent } from './modules/admin/posts/post-add/post-add.component';
import { PostControlComponent } from './modules/admin/posts/post-control/post-control.component';
import { CateProjectAddComponent } from './modules/admin/cate-project/cate-project-add/cate-project-add.component';
import { CateProjectControlComponent } from './modules/admin/cate-project/cate-project-control/cate-project-control.component';
import { LinkWebAddComponent } from './modules/admin/link-web/link-web-add/link-web-add.component';
import { LinkWebControlComponent } from './modules/admin/link-web/link-web-control/link-web-control.component';
import { ContactControlComponent } from './modules/admin/contact-control/contact-control.component';
import BlotFormatter from 'quill-blot-formatter';
import Quill from 'quill';
import { SearchComponent } from './modules/another/search/search.component';
import { PostsHomeComponent } from './modules/home/posts/posts-home/posts-home.component';
import { ProductMoreComponent } from './modules/home/product/product-more/product-more.component';
import { AppPageSizeImgComponent } from './modules/another/app-page-size-img/app-page-size-img.component';

Quill.register('modules/blotFormatter', BlotFormatter);


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    AboutusHomeComponent,
    TypicalImageHomeComponent,
    ContactHomeComponent,
    Error404Component,
    SignUpComponent,
    LoginAdminComponent,
    LoginUserComponent,
    AdminControlComponent,
    AsideComponent,
    HeaderAdminComponent,
    UserControlComponent,
    UserAddComponent,
    TagRoleComponent,
    RoleControlComponent,
    RoleAddComponent,
    AppPageSizeComponent,
    WhyChooseComponent,
    SliderHomeComponent,
    TypicalNumberHomeComponent,
    AnimationDigitComponent,
    ProductHomeComponent,
    MemberListComponent,
    MemberDetailComponent,
    MemberHomeComponent,
    LinkWebHomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    AboutUsComponent,
    AboutUsUavComponent,
    ProjectHomeComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    TypicalNumControlComponent,
    TypicalNumAddComponent,
    ProjectAddComponent,
    ProjectControlComponent,
    ProductAddComponent,
    ProductControlComponent,
    MemberAddComponent,
    MemberControlComponent,
    SliderAddComponent,
    SliderControlComponent,
    AboutControlComponent,
    AboutAddressComponent,
    TypicalImageAddComponent,
    TypicalImageControlComponent,
    PostsListComponent,
    PostsMoreComponent,
    PostsDetailComponent,
    PostAddComponent,
    PostControlComponent,
    CateProjectAddComponent,
    CateProjectControlComponent,
    LinkWebAddComponent,
    LinkWebControlComponent,
    ContactControlComponent,
    SearchComponent,
    PostsHomeComponent,
    ProductMoreComponent,
    AppPageSizeImgComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: false,
      positionClass: 'toast-bottom-right' ,
      timeOut:2000,
    }),
    BrowserAnimationsModule,
    QuillModule.forRoot() ,
    NgbTooltipModule ,
    NgxSummernoteModule, //editor
    //Ng2SearchPipeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
