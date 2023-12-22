import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Posts } from 'src/app/core/model/posts/posts';
import { PostService } from 'src/app/service/post/post.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  tongbaiviettimdc = 0;
  postURL = Domain.POSTS;
  postList: Posts[] = [];
  searchInput = '';
  searchForm = {
    searchInput: '',
    cate:'',
    endTime:'',
    startTime:''
  }
  paging = {
    page: 1,
    size: 9,
    totalRecord: 0,
  };
  baseURL = Constant.BASE_URL;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchInput = this.route.snapshot.queryParams['input'];
    this.getListAllWithPage();
  }

 
  getRequestParams(page: number, pageSize: number,search:string, cate:string , startTime:any , endTime:any ): any {
    let params: any = {};

    if (page) {
      params[`pageNo`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }

    if(search){
      params[`search`] = search;
    }
    if(cate){
      params.cate=cate
    }
    if(startTime){
      params[`start`] = startTime;
    }
    if(endTime){
      params[`end`] = endTime;
    }
    return params;
  }


  getListAllWithPage(){
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchForm.searchInput , this.searchForm.cate ,this.searchForm.startTime ,this.searchForm.endTime );
    this.postService.getListAllPage(params)
      .subscribe(
        data => {
          this.postList = data.content;
          this.paging.totalRecord = data.totalElements;
          console.log(this.postList)
        },
        error => {
          console.log(error);
        });
  }

  handlePageChangeTest(event: number): void {
    this.paging.page = event;
    this.getListAllWithPage();
  }
  searchPostwithCate() {
    this.getListAllWithPage();
  }

  goToSearch(input: string): void {
    const queryParams = { input: input };
    this.router.navigate(['/tim-kiem'], { queryParams });
    console.log(this.searchInput);
    this.getListAllWithPage()
  }
}
