import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Posts } from 'src/app/core/model/posts/posts';
import { PostService } from 'src/app/service/post/post.service';

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.css']
})
export class PostControlComponent {

  postList: Posts[] = [];
  baseURL = Constant.BASE_URL;
  postURL = Domain.POSTS;

  searchForm = {
    searchInput: '',
  }
  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }
  constructor(private router: Router,
    private postService: PostService,
  ) {
  }


  getListAllWithPage(){}

  search(): void {
    this.paging.page = 1;
    this.getListAllWithPage();
  }

  updatePost(id: number) {
    this.router.navigate([`admin/posts/edit/${id}`]);

  }

  deletePost(id: number) {
    let option = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục ");
    if (option) {
      this.postService.deletePosts(id).subscribe(() => {
        this.getListAllWithPage();
      })
    }
  }
}
