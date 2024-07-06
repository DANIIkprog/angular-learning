import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading = false;
  title = 'Learning angular for review';
  products: IProduct[] = [];

  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.loading=true;
    // this.productsService.getAll().subscribe((products) => {
    //   this.products= products;
    //   this.loading=false;
    // });
  }
}
