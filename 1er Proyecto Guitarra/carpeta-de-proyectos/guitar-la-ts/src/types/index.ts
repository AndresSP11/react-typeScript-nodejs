/* Aqui se definen las variables de type , en TypeScript */

export type Guitar ={
    name:string
    price:number
    description: string
    image:string
    id:number 
}

export type CartItem = Guitar & {
    quantity:number
}

