import  { useMemo } from 'react'
import type { OrderItem } from '../types'
import { formatCurrency } from '../helpers'

type OrderTotalsProps={
  order:OrderItem[]
  tip:number
  placeHolder:()=>void
}

const OrderTotals = ({order,tip,placeHolder}:OrderTotalsProps) => {
  /* Cuando los valores estàn o se crean en el mismo Component, no es necesario tipar las funciones */
  const subtotalAmount=useMemo(()=>order.reduce((total,item)=>total+item.quantity*item.price,0),[order]);
  const tipAmount=useMemo(()=>subtotalAmount*tip,[tip,order]);
  const totalAmount=useMemo(()=>subtotalAmount+tipAmount,[tip,order]);

  return (
    <>
    <div className=' space-y-3'>
      <h2 className=' font-black text-2xl'>
        Totales y propinas:
      </h2>
      <p> 
        Subtotal a pagar:
        <span className=' font-bold'> {formatCurrency(subtotalAmount)}</span>
      </p>
      <p> 
        Propina:
        <span className=' font-bold'>{formatCurrency(tipAmount)} </span>
      </p>
      <p> 
        Total a pagar:
        <span className=' font-bold'> {formatCurrency(subtotalAmount+tipAmount)}</span>
      </p>
    </div>
    <button className=' w-full bg-black p-3 uppercase text-white font-bold disabled:opacity-10 mt-10'
    disabled={totalAmount===0}
    onClick={()=>placeHolder()}>
      Guardar Orden
    </button>
    </>
  )
}

export default OrderTotals
