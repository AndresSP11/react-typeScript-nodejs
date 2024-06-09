import { useState } from 'react'
import { menuItems } from './data/db'
import './index.css'
import MenuItem from './components/MenuItem';
import useOrder from './hooks/useOrder';
import OrderContents from './components/OrderContents';
import OrderTotals from './components/OrderTotals';
import TipPercentageForm from './components/TipPercentageForm';

function App() {
  /* Esta paret extraemos los datos */
  const {addItem,order,removeItem,tip,setTip,placeHolder}=useOrder();

  const [items]=useState(menuItems);
 
  return (
    <>
      <header className=' bg-teal-400 py-5'>
        <h1 className=' text-center text-4xl font-black'>Calculadora de Propinas y Consumo</h1>
      </header>

      <main className=' max-w-7xl mx-auto py-20 grid md:grid-cols-2 '>
        <div className='p-5'>
          <h2 className=' text-4xl font-black'>Menú</h2>
          <div>
            {items.map((item)=>(
              <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
              ></MenuItem>
            ))}
          </div>

        </div>

        <div className=' border border-dashed p-5 rounded-lg space-y-10'>
          {
            order.length ? (
              <>
              <OrderContents
          order={order}
          removeItem={removeItem}
          ></OrderContents>
          <TipPercentageForm
          tip={tip}
          setTip={setTip}
          >
          </TipPercentageForm>
          <OrderTotals
          tip={tip}
          order={order}
          placeHolder={placeHolder}
          ></OrderTotals>
          </>
            ) : (<p className=' text-center font-black uppercase'>Orden Vacia</p>)
          }
        </div>

        
        
      </main>


    </>
  )
}

export default App
