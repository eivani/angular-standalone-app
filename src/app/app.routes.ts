import { Routes } from '@angular/router';
import { blogGuard } from './blog.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./product.routes').then((mod) => mod.PRODUCT_ROUTE),
  },
  {
    path: 'blog',
    canActivate: [blogGuard],
    loadComponent: () =>
      import('./blog-list/blog-list.component').then(
        (m) => m.BlogListComponent),
  },
];
