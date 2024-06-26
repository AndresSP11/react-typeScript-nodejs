
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Guitar from './components/Guitar'
import { db } from './data/db'
import { useCart } from './hooks/useCart'



function App() {
 
    const {clearCart,increaseQuantity,decreaseQuantity,removeFromCart,addToCart,cart,data,setCart,isEmpty,cartTotal}=useCart();
    
   

  return (
    <>
    <Header
    cart={cart}
    setCart={setCart}
    decreaseQuantity={decreaseQuantity}
    removeFromCart={removeFromCart}
    increaseQuantity={increaseQuantity}
    clearCart={clearCart}
    isEmpty={isEmpty}
    cartTotal={cartTotal}
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
