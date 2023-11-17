import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Constant } from 'src/app/core/config/constant';
import { Domain } from 'src/app/core/domain/domain';
import { Product } from 'src/app/core/model/product/product';
import { ProductService } from 'src/app/service/product/product.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  fileToUpload: string[] = [];
  url: any;
  id: any;
  products: Product = new Product();
  baseURL = Constant.BASE_URL;
  productURL = Domain.PRODUCT;
  imageURL: any;
  formProduct = new FormGroup({
    title: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    //quillContent: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
    private toast: ToastService
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.productService.getProductById(this.id).subscribe((data) => {
        this.products = data;
        console.log(data," 123")
        this.url = this.products.image?.pathUrl;
        this.imageURL = `${this.baseURL}/${this.productURL}/image/${this.id}`;
        this.formProduct.controls['title'].setValue(this.products.title)
        this.formProduct.controls['description'].setValue(this.products.description)
        //this.formProduct.controls['quillContent'].setValue(this.products.content)
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
  backToProductList() {
    return this.router.navigate([`admin/product`]);
  }
  addProduct() {
    const newsFormData = this.prepareFormData(this.products);
    this.productService.addProduct(newsFormData).subscribe(
      (data) => {
        this.toast.showSuccess();
        this.backToProductList();
      },
      (error) => {
        this.toast.showWarning(error.error);
        console.log(error);
      }
    );
  }

  updateProduct(id: any) {
    const proFormData = this.prepareFormData(this.products);
    this.productService.updateProduct(id, proFormData).subscribe(
      (data) => {
        this.toast.showSuccess();
        console.log(data);
        this.backToProductList();
      },
      (error) => {
        //this.toast.showWarning(error.error);
        console.log(error);
      }
    );
  }

  prepareFormData(products: Product): FormData {
    console.log(products);
    const formData = new FormData();
    formData.append(
      'product',
      new Blob([JSON.stringify(products)], { type: 'application/json' })
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

  onSubmit() {
    this.products.title=this.formProduct.controls['title'].value
    this.products.description=this.formProduct.controls['description'].value
    //this.products.content = this.formProduct.controls['quillContent'].value
    if (this.id) {
      this.updateProduct(this.id);
    } else {
      this.addProduct();
    }
  }
}
