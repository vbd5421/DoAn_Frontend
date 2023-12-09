import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Member } from 'src/app/core/model/member/member';
import { MemberService } from 'src/app/service/member/member.service';
import { ToastService } from 'src/app/service/toast/toast.service';
@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent {
  url: any;
  id: any;
  fileToUpload: string[] = [];
  member: Member = new Member();
  baseURL = Constant.BASE_URL;
  memberURL = Domain.MEMBER;
  imageURL: any;
  formMember = new FormGroup({
    ten: new FormControl('',Validators.required),
    chucVu: new FormControl('',Validators.required),
    namThamgGia: new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
  });

  constructor(
    private router: Router,
    private memberService: MemberService,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {}

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
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.getMemberById(this.id)
    }
  }
  getMemberById(id:number){
    this.memberService.getId(id).subscribe((data) => {
      this.member = data;
      this.url = this.member.image?.pathUrl;
      this.imageURL = `${this.baseURL}/${this.memberURL}/image/${this.id}`;
      this.formMember.controls['ten'].setValue(this.member.fullName);
      this.formMember.controls['chucVu'].setValue(this.member.position);
      this.formMember.controls['namThamgGia'].setValue(this.member.timeJoin);
      this.formMember.controls['email'].setValue(this.member.email);
    });
  }
  onSubmit() {
    this.member.fullName = this.formMember.controls['ten'].value;
    this.member.position = this.formMember.controls['chucVu'].value;
    this.member.timeJoin = this.formMember.controls['namThamgGia'].value;
    this.member.email = this.formMember.controls['email'].value;
    if (this.id) {
      this.updateMembers(this.id);
    } else {
      this.addMember();
    }
  }

  prepareFormData(member: Member): FormData {
    const formData = new FormData();
    formData.append('memberDTO',
      new Blob([JSON.stringify(member)], { type: 'application/json' })
    );
   // formData.append('imageFile', this.fileToUpload, this.fileToUpload.name);
   for (let i = 0; i < this.fileToUpload.length; i++) {
    formData.append(
      'file',
      this.fileToUpload[i]
      // this.fileToUpload[i].name
    );
  }
    return formData;
  }

  updateMembers(id:any){
    const memberFormData = this.prepareFormData(this.member);
    this.memberService.updateMember(id, memberFormData).subscribe(
      (data) => {
     
        this.toastService.showSuccess();
        this.goToBack();
      },
      (error) => {
        // this.toastService.showWarning(error.error);
        console.log(error);
      }
    );
   }

  addMember(){
    const memberFormData = this.prepareFormData(this.member);
    this.memberService.addMember(memberFormData).subscribe(() => {
        this.toastService.showSuccess();
        this.goToBack();
      },
      (error) => {
        // this.toastService.showWarning(error.error);
        console.log(error);
      }
    );
  }
  imageChange(e: any) {
    const files = e.target.files;
    if (files.length === 0) return;
    const reader = new FileReader();
    this.fileToUpload = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imageURL = reader.result;
    };
  }

  goToBack() {
    this.router.navigate(['/admin/member']);
  }
  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode < 32 || charCode > 57) {
      return false;
    }
    const input = event.target; // Lấy đối tượng input
    if (input.value.length >= 10) {
       alert('Bạn cần nhập đúng định dạng của số điện thoại!')
      return false;
    }
    return true;
  }


}
