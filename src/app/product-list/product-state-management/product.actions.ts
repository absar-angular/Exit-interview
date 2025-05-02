import { createAction, props } from "@ngrx/store";
import { ProductList } from "./product.model";

export const loadProducts = createAction('[Product] Load Action')
export const onSelectProduct = createAction('[Product] Select Product Action',props<{productId:number}>())
export const deleteProduct = createAction('[Product] Delete Product Action',props<{productId:number}>())
export const resetProductState = createAction('[Product] reste Action')
export const loadProductSuccess = createAction('[Product] Load Success Action',props<{products:ProductList[]}>())
export const loadProductFailure = createAction('[Product] Load Failure Action',props<{error:string|null}>())
export const addProduct = createAction('[Product] Add Prodcut Action',props<{product:ProductList}>())
export const addProductSuccess = createAction('[Product] addProductSuccess Action',props<{product:ProductList}>())
export const addProductFailure = createAction('[Product] addProductFailure Action',props<{error:string|null}>())