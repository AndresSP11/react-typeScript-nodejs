import { useState } from "react"
import { MenuItem, OrderItem } from "../types";

export default function useOrder(){
    /* En esta oportunidad se crea el Order, tener en cuenta que se tipa por parte de OrderItem, pero teniedo en cuenta que tiene quantity */
    /* En esta  */
    const [order,setOrder]=useState<OrderItem[]>([]);

    /* Aqui se asigna el valor del tip */

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
    const removeItem=(id:MenuItem['id'])=>{
        const nuevoArreglo=order.filter((item)=>item.id!=id);
        setOrder(nuevoArreglo);
    }

    const placeHolder=()=>{
        setOrder([]);
        setTip(0);
    }


    return{
        addItem,
        order,
        tip,
        setTip,
        removeItem,
        placeHolder
    }
}