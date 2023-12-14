import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './models/product.model';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(value: IProduct[], args: string): IProduct[] {
    if (!args || args =="") return value;
    value = value.filter((_) => _.name.toUpperCase() == args.toUpperCase());
    return value;
  }
}
