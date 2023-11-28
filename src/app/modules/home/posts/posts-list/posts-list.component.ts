import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Posts } from 'src/app/core/model/posts/posts';
import { PostService } from 'src/app/service/post/post.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {

  postList: Posts[] = [];
  baseURL = Constant.BASE_URL;
  postURL = Domain.POSTS;

  paging = {
    page: 1,
    size: 9,
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

  getRequestParams(page: number, pageSize: number,): any {
    let params: any = {};

    if (page) {
      params[`pageNo`] = page;
    }

    if (pageSize) {
      params[`pageSize`] = pageSize;
    }


    return params;
  }


  getListAllWithPage(){
    const params = this.getRequestParams(this.paging.page, this.paging.size, );
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

  handlePageChange(event: number): void {
    this.paging.page = event;
    this.getListAllWithPage();
  }

}
