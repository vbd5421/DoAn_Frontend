import { Component, OnInit } from '@angular/core';
import { LinkWeb } from 'src/app/core/model/link-web/link-web';
import { LinkWebService } from 'src/app/service/link-web/link-web.service';

@Component({
  selector: 'app-link-web-home',
  templateUrl: './link-web-home.component.html',
  styleUrls: ['./link-web-home.component.css']
})
export class LinkWebHomeComponent implements OnInit {

listLinkWeb : LinkWeb[]=[]

constructor(private linkWebService:LinkWebService) {
  
}
ngOnInit(): void {
  this.listAll()
}
listAll(){
  this.linkWebService.listPageWithSize().subscribe(data=>{
    this.listLinkWeb = data.content;
  })
}
}
