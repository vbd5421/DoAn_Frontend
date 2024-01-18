import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/core/model/address/address';
import { AddressService } from 'src/app/service/address/address.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-about-address',
  templateUrl: './about-address.component.html',
  styleUrls: ['./about-address.component.css']
})
export class AboutAddressComponent {
  address: Address = new Address();
  provinces:any[]
  districts: any[];
  wards: any[];
  id:number;
  constructor( private router: Router ,
                private toast: ToastService,
                private addressService : AddressService ,
                private route : ActivatedRoute, 
                private locationService: AddressService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProvinces();
    if(this.id){
      this.addressService.getById(this.id).subscribe(res=>{
        this.address = res
      })
    }
  }

  backAbout(){
    window.history.back()
  }

  AddAddress():void{
   this.addressService.createAddress(this.address).subscribe(data=>{
    
    this.toast.showSuccess()
    this.backAbout()
   })
  }
  updateAdress(id: number , addr: any ){
   this.addressService.updateAddress(id,addr).subscribe(data=>{
    this.backAbout()
   });
  }

  onSubmit(){
    if(this.id){
      this.updateAdress(this.id , this.address);
    }else{
      this.AddAddress();
    }
  }
// location

  getProvinces(): void {
    this.locationService.getLocation().subscribe((data: any[]) => {
      this.provinces = data;
      
    });
  }

  selectProvince(e:any){
    const city = e.target.value
   
    if(!city){
      return;
    }
    const search = this.provinces.filter((dt)=>dt.name===city)
    if(search && search.length>0){
      this.districts = search[0].districts
    }
  }

  selectDistricts(e:any){
    const dis = e.target.value
    if(!dis){
      return;
    }
    this.wards = this.districts.find(dt=>dt.name===dis)?.wards || []
  }
}
