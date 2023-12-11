import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Constant } from 'src/app/core/config/constant';


@Component({
  selector: 'app-app-page-size-img',
  templateUrl: './app-page-size-img.component.html',
  styleUrls: ['./app-page-size-img.component.css']
})
export class AppPageSizeImgComponent {

  @Input() pageSize: number;

  @Input() totalRecords: number;

  @Input() name = ' bản ghi';

  @Output() pageSizeChange = new EventEmitter<number>();

  pageSizeOptions = Constant.PAGE_SIZE_IMAGE;
 
  changePageSize() {
    this.pageSizeChange.emit(this.pageSize);
  }

}
