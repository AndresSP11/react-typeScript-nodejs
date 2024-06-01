
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Guitar from './components/Guitar'
import { db } from './data/db'

function App() {
 

    const initialCart=()=>{
        const localStorageCart=localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart   ) : [];
    }

const [data,setData]=useState(db);
const [cart,setCart]=useState(initialCart);

const MAX_ITEMS=5;
const MIN_ITEMS=1;

/* En base a la parte de los elementos, el useEffect se actualizará si es que cambiar
intermanete algo de  */

useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart));
},[cart]);


/* Estamos teniendo en cuenta que aqui pasamos la foto */
function addToCart(item){

    const buscadorIndexado=cart.findIndex((variable)=>variable.id==item.id);

    if(buscadorIndexado>=0){
        /* De esta forma se obtiene la parte de quantity en el carro de compras */
        const carroPremisa=[...cart];
        carroPremisa[buscadorIndexado].quantity++;
        /* Aqui almacenamos a todo el arreglo con el valor */
        setCart(carroPremisa);
    }else{
        /* Aqui estamos creando un atributo a la parte del Item */
        item.quantity=1;
        setCart(prevCart=>[...prevCart,item]);
    }
}

function removeFromCart(id){

    setCart((prevCart=>prevCart.filter((guitarra)=>guitarra.id!==id)))
}

function decreaseQuantity(id){
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

function increaseQuantity(id){

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

function clearCart(){

    setCart([]);


}
  return (
    <>
    <Header
    cart={cart}
    setCart={setCart}
    decreaseQuantity={decreaseQuantity}
    removeFromCart={removeFromCart}
    increaseQuantity={increaseQuantity}
    clearCart={clearCart}
    ></Header>
    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {data.map((guitar)=>(
                <Guitar
                key={guitar.id}
                guitar={guitar}
                setCart={setCart}
                cart={cart}
                addToCart={addToCart}
                ></Guitar>
                
            )
            )}
            
        </div>
    </main>

    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
