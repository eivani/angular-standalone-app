import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from '../models/product.model';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  product!: IProduct;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {

    this.activatedRoute.params
      .pipe(
        switchMap(({id})=> {
          return this.productService.getProduct(id);
        })
      )
      .subscribe((product: IProduct) => {
        console.log(product);

        this.product = product;
      });
  }
}
