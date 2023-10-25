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
    this.toast.info('Cập nhật thành công');
  }
  showWarning(error: any) {
      this.toast.warning(error);
  }
  showBooking(){
    this.toast.success('Bạn đã đặt phòng thành công')
  }
}