import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addProduct, deleteProduct, loadProducts, onSelectProduct, resetProductState } from './product-state-management/product.actions';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { productFeature } from './product-state-management/product.reducers';
import { ProductList } from './product-state-management/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [CommonModule,MatListModule,MatProgressSpinnerModule,HttpClientModule],
})

export class ProductListComponent implements OnDestroy {

  products$ = this.store.select(productFeature.selectProducts)
  isLoading$ = this.store.select(productFeature.selectIsLoading)
  selectedProduct$ = this.store.select(productFeature.productSelectById)

  constructor(private store:Store){
  this.store.dispatch(loadProducts())
  }

  onSelect(productId:number){
    this.store.dispatch(onSelectProduct({productId}))
  }

  onAddProduct(){
    const product:ProductList = {
      "id": 55,
      "title": "Newly added product",
      "price": '223.1',
      "rating":{rate:2, count: 4},
      "description": "Description",
      "category": "string",
      "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
    }
    this.store.dispatch(addProduct({product}))
  }

  onDeleteProduct(productId:number){
    this.store.dispatch(deleteProduct({productId}))
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetProductState())
  }
  
}
