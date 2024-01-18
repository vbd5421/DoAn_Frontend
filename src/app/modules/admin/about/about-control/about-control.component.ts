import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AboutUs } from 'src/app/core/model/about-us/about-us';
import { Address } from 'src/app/core/model/address/address';
import { AboutUsService } from 'src/app/service/about-us/about-us.service';
import { AddressService } from 'src/app/service/address/address.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-about-control',
  templateUrl: './about-control.component.html',
  styleUrls: ['./about-control.component.css']
})
export class AboutControlComponent {
  addressList: Address[] = [];
  about: AboutUs = new AboutUs();
  
  constructor(
    private aboutService: AboutUsService,
    private addressService: AddressService,
    private router: Router,
    private toastService: ToastService
  ) {}
  ngOnInit(): void {
    this.getistAllInformation();
    this.getListAddress();
  }
  quillConfig = {
    //toolbar: '.toolbar',
    blotFormatter: {},
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        [{'background':[]}],
        ['clean'],                                         // remove formatting button
        [{'color':[]}],
        ['link', 'image', 'video']
      ],
    },
  }
  addAbout_us() {
    this.aboutService.createInformation(this.about).subscribe(() => {
        this.toastService.showSuccess();
        setTimeout(() => {
          location.reload()
         }, 800);
      },
      error => {
        // this.toastService.showWarning(error.error);
        console.log(error);
      }
    );
  }

  getistAllInformation() {
    this.aboutService.getAllInformation().subscribe((res) => {
      if (res != null) {
        this.about = res;
      }
      
    });
  }

  getListAddress() {
    this.addressService.ListAll().subscribe((res) => {
      this.addressList = res;
     
    });
  }
  // xóa address
  deleteAddress(id: number) {
    let cf = confirm('Bạn có muốn xóa địa chỉ này?');
    if (cf) {
      this.addressService.deleteAddress(id).subscribe(
        () => {
          this.getListAddress();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  updateAddress(id: number) {
    this.router.navigate([`admin/about-us/address-edit/${id}`]);
  }

  onSubmit() {
    this.addAbout_us();
  }

  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 32 || charCode > 57) {
      return false;
    }
    const input = event.target; // Lấy đối tượng input
    if (input.value.length >= 18) {
      // alert('')
      return false;
    }
    return true;
  }

  reload() {
    location.reload();
  }
}
