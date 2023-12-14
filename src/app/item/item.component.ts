import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {

  @Input() items: IProduct[] = [];
  @Output() selectedProduct = new EventEmitter<number>();
  @Output() deletedProduct = new EventEmitter<number>();

  detailsProduct(id: number) {
    this.selectedProduct.emit(id);
  }

  deleteProduct(id: number) {
    this.deletedProduct.emit(id);
  }

}
