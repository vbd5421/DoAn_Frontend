import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Comment } from 'src/app/core/model/comment/comment';

import { CommentService } from 'src/app/service/comment/comment.service';
import { ProjectService } from 'src/app/service/project/project.service';

import { ToastService } from 'src/app/service/toast/toast.service';
import { TokenStorageService } from 'src/app/service/token-storage/token-storage.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
  commentList: Comment[] = [];
  commentListChild: Comment[] = [];
  comment: Comment = new Comment();
  username: string;
  userId: number;
  projectId: number;
  url: any;
  parentId: number;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService,
    private projectService: ProjectService,
    private tokenStorageService: TokenStorageService,
    private toast: ToastService,
    private toastService: ToastrService,
    
  ) {}

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.username = this.tokenStorageService.getUser().username;
      this.userId = this.tokenStorageService.getUser().id;
      this.comment.userName = this.username;

      // this.url = this.route.snapshot.queryParams['url'];
      this.url = this.route.snapshot.params['url'];
      this.projectService.getByUrl(this.url).subscribe((data) => {
        this.comment.project.id = data.id;
        this.projectId = data.id;
        this.getAllComment();
        this.getCommentChildByParent();
      });
    }
  }

  sendChildComment() {
    console.log(this.comment);
    this.commentService.creatComment(this.comment).subscribe(
      (res) => {
        this.toastService.success('Bình luận thành công!');
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      (error) => {
        this.toast.showWarning(error.error);
        console.log(error);
      }
    );
  }
  addParentId(id: number) {
    this.comment.parentId = id;
  }

  getAllComment() {
    this.commentService.getCommentByProjectId(this.projectId).subscribe(
      (data) => {
        this.commentList = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
  getCommentChildByParent() {
    this.commentService.getCommentChildByParent().subscribe(
      (data) => {
        this.commentListChild = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  disable(id: number) {
    let cf = confirm('Xóa bình luận');
    if (cf) {
      this.commentService.DisableComment(id).subscribe(() => {
        this.getAllComment();
      });
    }
  }

  disableChild(id: number) {
    let cf = confirm('Xóa bình luận');
    if (cf) {
      this.commentService.DisableComment(id).subscribe(() => {
        this.getCommentChildByParent();
      });
    }
  }

  updateComment(id: number, comment: any) {
    this.commentService.updateComment(id, comment).subscribe(() => {
        this.toastService.info('Chỉnh sửa thành công!');
        setTimeout(() => {
          location.reload();
        }, 1000);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
