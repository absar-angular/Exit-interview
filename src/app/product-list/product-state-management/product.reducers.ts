import { createFeature, createReducer, createSelector, on } from "@ngrx/store";
import { initialState } from "./product.model";
import { addProduct, deleteProduct, loadProductFailure, loadProducts, loadProductSuccess, onSelectProduct, resetProductState } from "./product.actions";



export const productReducer = createReducer(
    initialState,
    on(loadProducts,state => ({...state,isLoading:true})),
    on(loadProductSuccess,(state,{products}) => ({...state,isLoading:false,products})),
    on(loadProductFailure,(state,{error}) => ({...state,isLoading:false,error})),
    on(resetProductState, () => initialState),
    on(onSelectProduct,(state,{productId}) => ({...state,productId })),
    on(deleteProduct, (state,{productId}) => ({...state,products:state.products.filter(p=> p.id !== productId)})),
    on(addProduct, (state) => ({...state,isLoading:true})),
    on(addProduct, (state,{product}) => ({...state,isLoading:false,products:[product,...state.products]})),
    on(addProduct, (state) => ({...state,isLoading:false}))
)

 export const productFeature = createFeature({
    name: 'products',
    reducer: productReducer,
    extraSelectors:({selectProducts,selectProductId})=>({
     productSelectById:createSelector(
        selectProducts,
        selectProductId,
        (products,id)=>products.find(p => p.id === id)
     )
    })
  });
  