import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-list.component";
import { provideState } from "@ngrx/store";
import { productFeature } from "./product-state-management/product.reducers";
import { provideEffects } from "@ngrx/effects";
import { ProductEffects } from "./product-state-management/product.effects";


export const productRoutes:Routes = [
    {
        path:'',
        component:ProductListComponent,
        providers:[
            provideState(productFeature),
            provideEffects(ProductEffects)
        ]
    }
]