import { Component } from '@angular/core';
import { AboutUs } from 'src/app/core/model/about-us/about-us';
import { Address } from 'src/app/core/model/address/address';

@Component({
  selector: 'app-about-control',
  templateUrl: './about-control.component.html',
  styleUrls: ['./about-control.component.css']
})
export class AboutControlComponent {
  addressList: Address[] = [];
  about: AboutUs = new AboutUs();
  // about : About[]=[];
  ckeConfig: any;

  constructor(
    // private about_usService: ,
    // private addressService: AddressService,
    // private router: Router,
    // public toast: ToastrService,
    // private toastService: ToastService
  ) {}
  ngOnInit(): void {
    this.getistAllInformation();
    this.getListAddress();
  }
  quillConfig = {
    //toolbar: '.toolbar',
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['code-block'],
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
    // this.about_usService.createInformation(this.about).subscribe(
    //   () => {
    //     this.toastService.showSuccess();
    //   },
    //   (error) => {
    //     this.toastService.showWarning(error.error);
    //     console.log(error.error);
    //   }
    // );
  }

  getistAllInformation() {
    // this.about_usService.getAllInformation().subscribe((res) => {
    //   if (res != null) {
    //     this.about = res;
    //   }
    // });
  }

  getListAddress() {
    // this.addressService.ListAll().subscribe((res) => {
    //   this.addressList = res;
    // });
  }
  // xóa address
  deleteAddress(id: number) {
    // let cf = confirm('Bạn có muốn xóa địa chỉ này?');
    // if (cf) {
    //   this.addressService.delete(id).subscribe(
    //     () => {
    //       this.getListAddress();
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // }
  }

  updateAddress(id: number) {
    // this.router.navigate([`admin/about/address-update/${id}`]);
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
