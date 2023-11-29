import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { TypicalImage } from 'src/app/core/model/typical-image/typical-image';
import { ToastService } from 'src/app/service/toast/toast.service';
import { TypicalImageService } from 'src/app/service/typical-image/typical-image.service';

@Component({
  selector: 'app-typical-image-add',
  templateUrl: './typical-image-add.component.html',
  styleUrls: ['./typical-image-add.component.css']
})
export class TypicalImageAddComponent {

  gallery : TypicalImage = new TypicalImage();
  fileToUpload:string [] = [];
  url: any;
  id: any;
  baseURL = Constant.BASE_URL;
  galleryURL = Domain.TYPICAL_IMAGE;
  imageURL: any;
constructor(private router: Router ,
          private route: ActivatedRoute ,
          private galleryService: TypicalImageService,
            private toastService: ToastService){}

ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if(this.id){
      this.galleryService.getfindbyId(this.id).subscribe(data=>{
        this.gallery = data;
        this.url = this.gallery.image.pathUrl;
        this.imageURL =`${this.baseURL}/${this.galleryURL}/image/${this.gallery.image.name}`
      })
    }
  }

  onSubmit(){
    if(this.id){
      this.update(this.id);
    }else{
      this.addGallery();
    }
  }

addGallery(){
  const igFormdata = this.prepareFormdata(this.gallery);
  this.galleryService.addtypical_image(igFormdata).subscribe(()=>{
      this.toastService.showSuccess();
    this.gotoGalleryControl();
  },
    error=>{this.toastService.showWarning(error.error);
  })
}

gotoGalleryControl(){
  this.router.navigate(['/admin/tImage'])
}

update(id:any){
   const galleryDataForm = this.prepareFormdata(this.gallery);
    this.galleryService.update(id, galleryDataForm).subscribe(()=>{
      this.toastService.showSuccess();

      this.gotoGalleryControl();

    },error=>{
      this.toastService.showWarning(error.error);
    })
}

prepareFormdata(gallery: any):FormData{
  const formData = new FormData();
  formData.append('typicalImage',
    new Blob([JSON.stringify(gallery)], {type:'application/json'})
  );
  for (let i=0 ; i< this.fileToUpload.length; i++){
    formData.append(
      'imageFile',
      this.fileToUpload[i]
    )
  }
return formData
}

imageChange(e: any){
  const files = e.target.files;
  if (files.length === 0) return;
  const reader = new FileReader();
  this.fileToUpload=files;
  reader.readAsDataURL(files[0]);
  reader.onload = (_event) =>{
    this.imageURL= reader.result;
  }
}

}
