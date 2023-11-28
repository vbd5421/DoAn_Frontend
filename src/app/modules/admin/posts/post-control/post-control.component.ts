import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Posts } from 'src/app/core/model/posts/posts';
import { PostService } from 'src/app/service/post/post.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.css']
})
export class PostControlComponent implements OnInit{

  postList: Posts[] = [];
  baseURL = Constant.BASE_URL;
  postURL = Domain.POSTS;
  searchForm = {
    searchInput: '',
    cate:'',
    endTime:'',
    startTime:''
  }
  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }
  constructor(private router: Router,
    private postService: PostService,
    private toast : ToastService
  ) {
  }
  ngOnInit(): void {
    this.getListAllWithPage()
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

  search(): void {
    this.paging.page = 1;
    this.getListAllWithPage();
  }

  updatePost(id: number) {
    this.router.navigate([`admin/posts/edit/${id}`]);
  }

  handlePageChange(event: number): void {
    this.paging.page = event;
    this.getListAllWithPage();
  }
  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    this.getListAllWithPage();
    console.log(event)
  }


  deletePost(id: number) {
    let option = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ");
    if (option) {
      this.postService.deletePosts(id).subscribe(() => {
        this.getListAllWithPage();
        this.toast.showDelete()
      })
    }
  }
}
