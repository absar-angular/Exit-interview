
export interface UserState {
    users:Users[],
    isLoading:boolean,
    error:string | null,
    userId:number
}

export const initUserState:UserState = {
    userId:0,
    users:[],
    isLoading:false,
    error:null
}

export interface Users {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: string
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    hair: {
      color: string
      type: string
    }
  }