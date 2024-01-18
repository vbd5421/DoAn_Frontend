import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage/token-storage.service';
import { provideRouter } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  roles: string[] = [];
  searchForm = {
    searchInput: '',
    cate:'',
    endTime:'',
    startTime:''
  }
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getToken().roles;
    }
  }
  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
  goToSearch(input: any) {
    const queryParams  = {input : input}
    this.router.navigate(['/tim-kiem'],{queryParams});
    console.log(this.searchForm.searchInput);
  }
// navigation
  nav = [
    {
      id: 1,
      name: "trang chủ",
      url: "trang-chu",
      navChild:[]
    },
    {
      id: 2,
      name: "dự án",
      url: "du-an",
      navChild: [
        // {
        //   name: 'cấp trường',
        //   url: 'danh-sach',
        // },
        // {
        //   name: 'cấp bộ',
        //   url: 'danh-sach',
        // },
        // {
        //   name: 'cấp thành phố',
        //   url: 'danh-sach',
        // },
        // {
        //   name: 'cấp nhà nước',
        //   url: 'danh-sach',
        // },
      ]
    },
    // {
    //   id: 2,
    //   name: "blog", // sản phẩm
    //   url: "san-pham",
    //   navChild:[]
    // },
    {
      id: 3,
      name: "giới thiệu",
      url: "gioi-thieu",
      navChild:[
        {
          name: "giới thiệu chung",
          url: "gioi-thieu-chung",
        },
        {
          name: "giới thiệu IoT",
          url: "iot",
        },
        {
          name: "đội ngũ nghiên cứu",
          url: "thanh-vien",
        }
      ]
    },
    {
      id: 4,
      name: "Tin tức và sự kiện",
      url: "tin-tuc",
      navChild:[]
    },
    {
      id: 2,
      name: "blog", // sản phẩm
      url: "blog",
      navChild:[]
    },
    {
      id: 5,
      name: "liên hệ",
      url: "lien-he",
      navChild:[]
    }
  ]

}
