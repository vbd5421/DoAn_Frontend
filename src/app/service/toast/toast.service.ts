import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toast: ToastrService) {}

  showSuccess() {
    this.toast.success('Bạn đã lưu thành công');
  }
  showUpdate() {
    this.toast.info('Bạn đã cập nhật thành công');
  }
  showDelete(){
    this.toast.success('Bạn đã xóa thành công');
  }
  showWarning(error: any) {
      this.toast.warning('error')
  }
}
