import { Component, OnInit } from '@angular/core';

import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Posts } from 'src/app/core/model/posts/posts';
import { PostService } from 'src/app/service/post/post.service';


@Component({
  selector: 'app-posts-more',
  templateUrl: './posts-more.component.html',
  styleUrls: ['./posts-more.component.css']
})
export class PostsMoreComponent implements OnInit {
  postURL = Domain.POSTS;
  baseURL = Constant.BASE_URL;
  postList: Posts[] = [];
  randomNumber = Math.floor(Math.random() * 2) ;
  constructor(private postService: PostService) {}
  ngOnInit(): void {
    //this.getListAllWithPage() ;
    this.getListAll();
    this.shuffleItems();
  }
  
  paging = {
    page: 1,
    size: 4,
    totalRecord: 0
  }
 
  // getRequestParams(page: number, pageSize: number,): any {
  //   let params: any = {};

  //   if (page) {
  //     params[`pageNo`] = page;
  //   }

  //   if (pageSize) {
  //     params[`pageSize`] = pageSize;
  //   }

  //   return params;
  // }


  // getListAllWithPage(){
  //   const params = this.getRequestParams(this.paging.page, this.paging.size, );
  //   this.postService.getListAllPage(params)
  //     .subscribe(
  //       data => {
  //         this.postList = data.content;
  //         this.paging.totalRecord = data.totalElements;
  //         console.log(this.postList)
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  getListAll(){
    this.postService.getListAll().subscribe(data=>{
      this.postList=data
    })
  }

  shuffleItems() {
    let counter = this.postList.length;

    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      [this.postList[counter], this.postList[index]] = [
        this.postList[index],
        this.postList[counter],
      ];
    }
  }
}
