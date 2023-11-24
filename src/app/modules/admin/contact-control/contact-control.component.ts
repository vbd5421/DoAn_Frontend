import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-control',
  templateUrl: './contact-control.component.html',
  styleUrls: ['./contact-control.component.css']
})
export class ContactControlComponent implements OnInit {
  searchInput:''

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  search(){}
  refresh() {
    // this.active = null
    // this.paging.page = 1
    // this.getAllContactPagesize()
  }
  // chưa liên hệ
  Pending(){
    // this.active = true
    // this.paging.page = 1
    // this.getAllContactPagesize()
  }
// đã liên hệ
  Process(){
    // this.paging.page = 1
    // this.active = false
    // // console.log(this.active)
    // this.getAllContactPagesize()
  }
}
