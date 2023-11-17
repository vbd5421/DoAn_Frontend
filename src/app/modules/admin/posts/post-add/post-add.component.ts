import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Posts } from 'src/app/core/model/posts/posts';
import { PostService } from 'src/app/service/post/post.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent {
  post: Posts = new Posts();
  fileToUpload: string[] = [];
  formPost = new FormGroup({
    moTa: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    
  });
  url: any;
  id: any;
  ckeConfig: any;
  baseURL = Constant.BASE_URL;
  postURL = Domain.POSTS;
  imageURL: any;

  selectedFile: File;
  fileName: any;

  currentPage: any;
  pageSize: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService,
    private toastService: ToastService
  ) {}


  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.postService.getPostById(this.id).subscribe((data) => {
        this.post = data;
        console.log(this.post);
        this.url = this.post.image?.pathUrl;
        this.imageURL = `${this.baseURL}/${this.postURL}/image/${this.id}`;
        this.formPost.controls['moTa'].setValue(this.post.description);
        this.formPost.controls['title'].setValue(this.post.title);
      });
    }

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

  onSubmit() {
    this.post.title = this.formPost.controls['title'].value;
    this.post.description = this.formPost.controls['moTa'].value;
    if (this.id) {
      this.updatePost(this.id);
    } else {
      this.addPosts();
    }
  }


  prepareFormData(post: Posts): FormData {
    console.log(post);
    const formData = new FormData();
    formData.append(
      'postDTO',
      new Blob([JSON.stringify(post)], { type: 'application/json' })
    );
    console.log(formData);
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

  addPosts() {
    const postFormData = this.prepareFormData(this.post);
    this.postService.addPosts(postFormData).subscribe(
      () => {
        this.toastService.showSuccess();
        this.goToPostList();
      },
      (error) => {
        this.toastService.showWarning(error.error);
        console.log(error.error);
      }
    );
  }

  goToPostList() {
    this.router.navigate(['/admin/posts']);
  }

  updatePost(id: any) {
    const postFormData = this.prepareFormData(this.post);
    this.postService.updatePosts(id, postFormData).subscribe(
      (data) => {
        this.toastService.showSuccess();
        this.goToPostList();
      },
      (error) => {
        this.toastService.showWarning(error.error);
        console.log(error.error);
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
}
