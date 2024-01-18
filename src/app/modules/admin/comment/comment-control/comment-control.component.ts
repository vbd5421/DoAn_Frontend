import { Component } from '@angular/core';
import { Comment } from 'src/app/core/model/comment/comment';
import { CommentService } from 'src/app/service/comment/comment.service';
import { ToastService } from 'src/app/service/toast/toast.service';
import { TokenStorageService } from 'src/app/service/token-storage/token-storage.service';

@Component({
  selector: 'app-comment-control',
  templateUrl: './comment-control.component.html',
  styleUrls: ['./comment-control.component.css']
})
export class CommentControlComponent {
  commentList: Comment[] = [];
  commentListChild: Comment[] = [];
  comment: Comment = new Comment();
  commentAdminView: any;
  username: string;
  userId: number;
  parentId: number;
  projectId: any;
  projectIdByChild: any;

  paging = {
    page: 1,
    size: 5,
    totalRecord: 0,
    search: '',
  };

  constructor(
    private commentService: CommentService,
    private tokenStorageService: TokenStorageService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.username = this.tokenStorageService.getUser().username;
      this.userId = this.tokenStorageService.getUser().id;
      this.comment.userName = this.username;
    }
    this.getAllCommentAdminWithPage();
    this.getCommentChildAdmin();
  }

  getParams(page: number, pageSize: number, search: String) {
    let params: any = {};
    if (page) {
      params[`pageNo`] = page;
    }
    if (pageSize) {
      params[`pageSize`] = pageSize;
    }
    if (search) {
      params[`search`] = search;
    }
    return params;
  }

  getAllCommentAdminWithPage(): void {
    const params = this.getParams(
      this.paging.page,
      this.paging.size,
      this.paging.search
    );
    this.commentService.getListCommentwithPageAdmin(params).subscribe(
      (res) => {
        this.commentList = res.content;
        this.paging.totalRecord = res.totalElements;
        console.log(this.commentList)
      },
      (error) => {
        console.log(error);
      }
    );
  }
  //
  getAllCommentAdmin() {
    this.commentService.getParentCmtAdmin().subscribe(data => {
        //this.commentList = data;
        this.commentList = data;
        
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addParentId(id: number, projectId: number) {
    this.comment.parentId = id;
    this.comment.project.id = projectId;
  }

  // chỉnh sửa
  updateComment(id: number, comment: any) {
    this.commentService.updateComment(id, comment).subscribe(
      (response) => {
        this.toast.showUpdate();
        console.log(response);
        setTimeout(() => {
          location.reload();
        }, 1500);
      },
      (error) => {
        this.toast.showWarning(error.error);
        console.log(error);
      }
    );
  }

  RepComment() {
    this.commentService.creatComment(this.comment).subscribe(
      () => {
        this.toast.showSuccess();
        setTimeout(() => {
          location.reload();
        }, 1500);
      },
      (error) => {
        this.toast.showWarning(error.error);
        console.log(error);
      }
    );
  }

  getCommentChildAdmin() {
    this.commentService.getCommentChildByParentAdmin().subscribe(
      (data) => {
        this.commentListChild = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  Disable(id: number) {
    let cf = confirm('Ẩn bình luận');
    if (cf) {
      this.commentService.DisableComment(id).subscribe(() => {
        this.getAllCommentAdminWithPage();
      });
    }
  }

  DisableChild(id: number) {
    let cf = confirm('Ẩn bình luận');
    if (cf) {
      this.commentService.DisableComment(id).subscribe(() => {
        this.getCommentChildAdmin();
      });
    }
  }

  Enable(id: number) {
    let cf = confirm('Hiện bình luận');
    if (cf) {
      this.commentService.EnableComment(id).subscribe(() => {
        this.getAllCommentAdminWithPage();
      });
    }
  }

  EnableChild(id: number) {
    let cf = confirm('Hiện bình luận');
    if (cf) {
      this.commentService.EnableComment(id).subscribe(() => {
        this.getCommentChildAdmin();
      });
    }
  }

  Delete(id: number) {
    let cf = confirm('Xóa bình luận');
    if (cf) {
      this.commentService.deleteComment(id).subscribe(() => {
        this.getAllCommentAdminWithPage();
      });
    }
  }
  DeleteChild(id: number) {
    let cf = confirm('Xóa bình luận');
    if (cf) {
      this.commentService.deleteComment(id).subscribe(() => {
        this.getCommentChildAdmin();
      });
    }
  }

  search(): void {
    this.paging.page = 1;
    this.getAllCommentAdminWithPage();
  }

  handPageChange(event: number): void {
    this.paging.page = event;
    this.getAllCommentAdminWithPage();
  }
  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    this.getAllCommentAdminWithPage();
  }
}
