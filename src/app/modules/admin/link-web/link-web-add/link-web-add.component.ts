import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LinkWeb } from 'src/app/core/model/link-web/link-web';

@Component({
  selector: 'app-link-web-add',
  templateUrl: './link-web-add.component.html',
  styleUrls: ['./link-web-add.component.css']
})
export class LinkWebAddComponent implements OnInit {
  id: any;
  linkWeb: LinkWeb=new LinkWeb()
  formLink = new FormGroup({
    name: new FormControl('',[Validators.required]),
    linkUrl: new FormControl('',[Validators.required]),
  });


  ngOnInit(): void {
    console.log('liên kết web')
  }

  onSubmit(){}
  cancel() {
    window.history.back()
  }

}
