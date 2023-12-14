import {
  Component,
  EnvironmentInjector,
  SimpleChanges,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { IProduct } from '../models/product.model';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ItemComponent, AddProductComponent, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  providers: [SearchPipe],
})
export class ProductListComponent {
  products: IProduct[] = [];
  product!: IProduct;
  searchText = '';

  constructor(
    private productService: ProductService,
    private router: Router,
    private searchPipe: SearchPipe
  ) {
    this.productService.getProducts().subscribe((prodouct: IProduct[]) => {
      this.products = prodouct;
    });
  }

  ngOnInit(): void {}

  detailsProduct(index: number) {
    this.router.navigate(['/home', index]);
  }

  deletedProduct(id: number) {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        this.products = this.products.filter((x) => x.id != id);
      },
      error: (e) => {
        console.log('error');
      },
    });
  }

  addProduct(product: any) {
    let result = Object.assign({ id: Math.random(), ...product });

    this.productService.addProduct(result).subscribe((item) => {
      this.products.push(product);
    });
  }

  search() {
   this.products= this.searchPipe.transform(this.products,this.searchText);
  }
}
