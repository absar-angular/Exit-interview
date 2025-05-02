
export interface ProductState {
    products:ProductList[],
    isLoading:boolean,
    error:string| null,
    productId: number
}

export const initialState:ProductState = {
    products:[],
    isLoading:false,
    error:null,
    productId:0
}

export interface ProductList {
    category:string
    description:string
    id:number
    image:string
    price:string
    rating:{rate:number, count: number}
    title:string
  }