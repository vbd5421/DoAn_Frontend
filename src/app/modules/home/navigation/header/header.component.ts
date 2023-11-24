import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage/token-storage.service';
import { provideRouter } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  roles: string[] = [];
  searchInput=""
  constructor(private authService: AuthService , private tokenStorage: TokenStorageService, private router:Router) { }
  ngOnInit(): void {
    if(this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getToken().roles;
      
    }
  }
  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
}
goToSearch(input:any){
  this.router.navigate(['/tim-kiem'])
  // const queryParams  = {input : input}
  //   this.router.navigate(['/tim-kiem'],{queryParams});
  //   console.log(this.searchInput);
}
}
