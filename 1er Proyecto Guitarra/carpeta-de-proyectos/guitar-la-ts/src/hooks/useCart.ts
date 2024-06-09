import { useEffect,useMemo,useState } from "react";
import { db } from "../data/db";
import { CartItem, Guitar} from "../types";

export const useCart=()=>{
    const initialCart=():CartItem[]=>{
        const localStorageCart=localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
}

const [data]=useState(db);
const [cart,setCart]=useState(initialCart);

const MAX_ITEMS=5;
const MIN_ITEMS=1;

/* En base a la parte de los elementos, el useEffect se actualizará si es que cambiar
intermanete algo de  */

useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart));
},[cart]);

/* Estamos teniendo en cuenta que aqui pasamos la foto */
function addToCart(item:Guitar){
    const buscadorIndexado=cart.findIndex((variable)=>variable.id==item.id);

    if(buscadorIndexado>=0){
        /* De esta forma se obtiene la parte de quantity en el carro de compras */
        const carroPremisa=[...cart];
        carroPremisa[buscadorIndexado].quantity++;
        /* Aqui almacenamos a todo el arreglo con el valor */
        setCart(carroPremisa);
    }else{
        /* Aqui estamos creando un atributo a la parte del Item */
        const newItem : CartItem={...item,quantity:1};
        setCart(prevCart=>[...prevCart,newItem]);
    }
}

function removeFromCart(id : Guitar['id']){
    setCart((prevCart=>prevCart.filter((guitarra)=>guitarra.id!==id)))
}

function decreaseQuantity(id: Guitar['id']){
    const updateCart=cart.map((guitar)=>{
        if(guitar.id==id && MIN_ITEMS<guitar.quantity){
            return{
                ...guitar,
                quantity:guitar.quantity-1
            }
        }
        return guitar
    })
    setCart(updateCart);

}

function increaseQuantity(id : Guitar['id']){

    const updateCart=cart.map((guitar)=>{
        if(guitar.id==id && guitar.quantity<MAX_ITEMS){
            return{
                ...guitar,
                quantity:guitar.quantity+1
            }
        }
        return guitar
    })
    setCart(updateCart)
}

const isEmpty=useMemo(()=>cart.length==0,[cart]);

const cartTotal=useMemo(()=>cart.reduce((total,elemento)=>elemento.price*elemento.quantity+total,0),[cart]);

function clearCart(){
    setCart([]);
}

    return{
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        addToCart,
        cart,
        data,
        setCart,
        initialCart,
        isEmpty,
        cartTotal

    }
}