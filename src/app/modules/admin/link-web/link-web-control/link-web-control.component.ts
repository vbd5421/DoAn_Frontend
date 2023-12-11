import {Component, OnInit} from '@angular/core';
import {LinkWeb} from "../../../../core/model/link-web/link-web";
import {Constant} from "../../../../core/config/constant";
import {Router} from "@angular/router";
import {AuthService} from "../../../../service/auth/auth.service";
import {ToastService} from "../../../../service/toast/toast.service";
import {LinkWebService} from "../../../../service/link-web/link-web.service";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-link-web-control',
  templateUrl: './link-web-control.component.html',
  styleUrls: ['./link-web-control.component.css']
})
export class LinkWebControlComponent implements OnInit {
  listLinkWeb: LinkWeb[] = []
  baseURL = Constant.BASE_URL;
  searchInput = '';
  paging = {
    page: 1,
    size: 5,
    totalRecord: 0
  }

  constructor(private router: Router,
              private auth: AuthService,
              private linkWebService: LinkWebService,
              private toast: ToastService) {
  }

  ngOnInit(): void {
    this.getLinkWebListAllWithPage()
  }

  getRequestParams(page: number, pageSize: number, name: string): any {
    let params: any = {};
    if (page) {
      params[`pageNo`] = page;
    }
    if (pageSize) {
      params[`pageSize`] = pageSize;
    }
    if (name) {
      params[`search`] = name;
    }
    return params;
  }

  getLinkWebListAllWithPage() {
    const params = this.getRequestParams(this.paging.page, this.paging.size, this.searchInput)
    this.linkWebService.listPageWithSize(params).subscribe(data => {
        this.listLinkWeb = data.content;
        this.paging.totalRecord = data.totalElements;
      },
      error => {
        console.log(error);
      }
    )
  }

  search(): void {
    this.paging.page = 1;
    this.getLinkWebListAllWithPage();
  }

  handlePageChange(event: number): void {

    this.paging.page = event;
    this.getLinkWebListAllWithPage();
  }

  handlePageSizeChange(event: any): void {
    this.paging.size = event;
    this.paging.page = 1;
    this.getLinkWebListAllWithPage();
  }

  updateLinkWeb(id: number) {
    return this.router.navigate(['admin/link-web/edit', id]);
  }
  deleteLinkWeb(id:number){
    // let option = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục");
    // if (option) {
    //   this.cateProjectService.deleteCate(id).subscribe(() => {
    //     this.getCateProjectListAllwithPage();
    //     this.toast.showDelete()
    //   })
    // }
    let cf = confirm("Dữ liệu sẽ bị xóa . Bạn có mốn tiếp tục");
    if(cf){

      this.linkWebService.deleteLinkWeb(id).subscribe(data=>{
        this.getLinkWebListAllWithPage()
        this.toast.showDelete()
      })
    }
  }
}
