import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { ProductModel } from './models/product-model';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  product: ProductModel[] = [];

  constructor(
    private productService: ProductService,
    private errService: ErrorService
  ) { }

  ngOnInit() {
    this.getlist();
  }
  getlist(){
    this.productService.getList().subscribe((res:any)=>{
      this.product = res.data;
    },(err)=>{
      this.errService.errorHandler(err)
    });
  }
}
