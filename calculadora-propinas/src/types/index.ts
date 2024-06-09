/* En esta parte se tiene que definir el tipado que se va obtener en la base de datops, asì como tambien
en la parte de los States necesarios . */

export type MenuItem={
    id:number,
    name:string,
    price:number
}

/* Cantidad de OrderItem aqui en la cantidad */

export type OrderItem= MenuItem & {
    quantity:number
}
