import { useState } from "react"
import { MenuItem, OrderItem } from "../types";

export default function useOrder(){
    /* En esta oportunidad se crea el Order, tener en cuenta que se tipa por parte de OrderItem, pero teniedo en cuenta que tiene quantity */
    /* En esta  */
    /* En el otro caso , la variable o la funcion arrow function de la funcion con parentesis etc   */
    const [order,setOrder]=useState<OrderItem[]>([]);
    /* Aqui se asigna el valor del tip, este es el valor de la propina en general*/
    const [tip,setTip]=useState(0);
    /* Esto es el addItem, recuerda que es un arrowFunction() */
    const addItem=(item:MenuItem)=>{
        const itemExist=order.findIndex((orderItem)=>orderItem.id==item.id);
        if(itemExist<0){
            /* newOrder, la parte del item */
            const newOrder:OrderItem={...item,quantity:1};
            setOrder([...order,newOrder]);
        }else{
            const newItem=order.map((orderItem)=>{
                if(orderItem.id==item.id){
                    return {...orderItem, quantity:orderItem.quantity+1}
                }else{
                    return orderItem;
                }
            })
            setOrder(newItem);
        }
    }

    /*  */
    const removeItem=(id:MenuItem['id'])=>{
        const nuevoArreglo=order.filter((item)=>item.id!=id);
        setOrder(nuevoArreglo);
    }

    const placeHolder=()=>{
        /* Función para dejar el State vacio, recordar que es de forma dinamica el trabajo que se desarrolla aqui con el uso del State */
        setOrder([]);
        setTip(0);
    }


    return{
        addItem, /* Función que tiene que ver igualdad con el item en el mismo carrito */
        order, /* Registro de ordenes en el carro */
        tip, /* Conrol de gasto */
        setTip,
        removeItem,
        placeHolder
    }
}