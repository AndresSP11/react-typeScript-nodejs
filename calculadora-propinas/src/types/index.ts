export type MenuItem={
    id:number,
    name:string,
    price:number
}

/* Cantidad de OrderItem aqui en la cantidad */

export type OrderItem= MenuItem & {
    quantity:number
}
