import { Component, OnInit } from '@angular/core';
import { Constant } from 'src/app/core/config/constant';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchInput=''
  paging = {
    page: 1,
    size: 12,
    totalRecord: 0,
  };
  baseURL = Constant.BASE_URL;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  goToSearch(input:string){}
}
