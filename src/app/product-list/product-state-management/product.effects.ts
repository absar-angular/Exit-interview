import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addProduct, addProductFailure, addProductSuccess, loadProductFailure, loadProducts, loadProductSuccess, resetProductState } from "./product.actions";
import { catchError, filter, map, Observable, of, switchMap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ProductList } from "./product.model";
import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";


@Injectable()
export class ProductEffects {

    constructor(private action$:Actions,private http:HttpClient, private router:Router){}
    
    loadUsers$ = createEffect(()=>{
       return this.action$.pipe(
            ofType(loadProducts),
            switchMap(()=>{
            return this.getProducts().pipe(
            map((products:ProductList[]) => loadProductSuccess({products})),
            catchError(error => of(loadProductFailure(error)))
            )
            })
        )
    })
    
    addProduct$ = createEffect(()=>{
       return this.action$.pipe(
            ofType(addProduct),
            switchMap(({product})=>{
                return this.addProduct(product).pipe(
                map((product) => addProductSuccess({product})),
                catchError(err => of(addProductFailure(err)))
                )
            })
        )
    })

    // resetEffect$ = createEffect(()=>{
    //    return this.router.events.pipe(
    //    filter(event => event instanceof NavigationStart),
    //    map(()=> resetProductState())
    //    )
    // })
    
    getProducts():Observable<ProductList[]>{
     return this.http.get<ProductList[]>('https://fakestoreapi.com/products')
    }

    addProduct(product:ProductList):Observable<ProductList> {
        return this.http.post<ProductList>('https://fakestoreapi.com/products',product)
    }
}



