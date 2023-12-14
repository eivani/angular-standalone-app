import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { IProduct } from '../models/product.model';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent implements OnInit {
  form!: FormGroup;

  @Input() product!:IProduct;
  @Output() addProduct = new EventEmitter()

  constructor() {
    this.initForm();
  }

  ngOnInit(): void {}

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
    });
  }

  onSubmit() {
    this.addProduct.emit(this.form.value);
  }
}
