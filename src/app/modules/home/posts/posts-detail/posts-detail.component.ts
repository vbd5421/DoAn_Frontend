import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Posts } from 'src/app/core/model/posts/posts';
import { PostService } from 'src/app/service/post/post.service';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent {

  baseURL = Constant.BASE_URL;
  url: any;
  content:any;
  post :Posts = new Posts();

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router:Router,
              private sanitizer : DomSanitizer ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.url = this.route.snapshot.params['url'];
    // this.url = this.route.snapshot.queryParams['url'];
    this.postService.getPostByUrl(this.url).subscribe(data => {
      this.post = data;
      // console.log(data)
      document.title = this.post.title;
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.post.content);
    })
  }
}
