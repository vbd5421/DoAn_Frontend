import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LinkWeb } from 'src/app/core/model/link-web/link-web';
import { LinkWebService } from 'src/app/service/link-web/link-web.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-link-web-add',
  templateUrl: './link-web-add.component.html',
  styleUrls: ['./link-web-add.component.css']
})
export class LinkWebAddComponent implements OnInit {
  id: number;
  linkWeb: LinkWeb=new LinkWeb()
  formLink = new FormGroup({
    name: new FormControl('',[Validators.required]),
    linkUrl: new FormControl('',[Validators.required]),
  });
  constructor(
    private toast: ToastService,
    private linkWebService: LinkWebService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    if(this.id){
      this.linkWebService.getById(this.id).subscribe(data=>{
        this.linkWeb = data;
        this.formLink.controls['name'].setValue(this.linkWeb.name);
        this.formLink.controls['linkUrl'].setValue(this.linkWeb.url);
      })
    }
  }

  onSubmit(){
    this.linkWeb.name= this.formLink.controls['name'].value;
    this.linkWeb.url= this.formLink.controls['linkUrl'].value;
    if(this.id){
      this.update()
    }
    else {
      this.addLinkWeb();
    }
  }

  update() {
    this.linkWebService.updateLinkWeb(this.linkWeb).subscribe(
      () => {
        this.toast.showSuccess();
        this.cancel();
      },
      error => {
       console.error(error)
      }
    );
  }
  addLinkWeb() {
    this.linkWebService.addLinkWeb(this.linkWeb).subscribe(
      () => {
        this.toast.showSuccess();
        this.cancel();
      },
      error => {
        console.error(error)
       }
    );
  }

  cancel() {
    window.history.back()
  }
}
