import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comment } from 'src/app/core/model/comment/comment';

import { CommentService } from 'src/app/service/comment/comment.service';
import { ProjectService } from 'src/app/service/project/project.service';
import { ToastService } from 'src/app/service/toast/toast.service';
import { TokenStorageService } from 'src/app/service/token-storage/token-storage.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {
  comment : Comment = new Comment
  //comment : Comment = new Comment();
  username:string;
  userId: number;
  url: string;
  id:number

constructor(private route:ActivatedRoute ,
            private commentService: CommentService,
            private projectService: ProjectService,
            private tokenStorageService: TokenStorageService,
            private toastService: ToastrService ,
            private  toast: ToastService,
            ){}

  ngOnInit(): void {
    if(this.tokenStorageService.getToken()){
      this.username = this.tokenStorageService.getUser().username;
      this.userId = this.tokenStorageService.getUser().id;
      this.comment.userName = this.username
      
      this.getProject();
    }
  }

 sendComment(){
    this.commentService.creatComment(this.comment).subscribe(res=>{
      this.toastService.success('Bình luận thành công', 'Thành Công!');
     setTimeout(() => {
      location.reload()
     }, 1000);
    },
    error=>{
      this.toast.showWarning(error.error)
      console.log(error)}
    )
    // this.commentViewService.createComment(this.comment)
    // // this.comment.content = ""
    // setTimeout(() => {
    //   location.reload()
    // }, 1000);
  }
  getProject(){
    this.url = this.route.snapshot.params['url'];
    // this.url = this.route.snapshot.queryParams['url'];
    this.projectService.getByUrl(this.url).subscribe(data => {
      this.comment.project.id = data.id;
      // console.log(this.comment.project.id);
    })
  }
  onSubmit(){  
      this.sendComment();
  }
}
