const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipPercentageFormProps={
    setTip:React.Dispatch<React.SetStateAction<number>>
    tip:Number
}

import React from 'react'
const TipPercentageForm = ({setTip,tip}:TipPercentageFormProps) => {
  return (
    <div>
        <h3 className=' font-black text-2xl'>Propina:</h3>
        <form action="">
            {tipOptions.map(tipOption=>(
                <div key={tipOption.id} className=' flex gap-2'>
                    <label htmlFor="">{tipOption.label}</label>
                    <input 
                    id={tipOption.id}
                    type="radio"
                    name='tip'
                    value={tipOption.value}
                    /* EL onChange, es cuando el evento que se cambia va tener o va ser el setTip el valor tomado del evento 
                    recordar que el + es quien le da valor */
                    onChange={e=>setTip(+e.target.value)} 
                    checked={tipOption.value===tip}
                    /> 
                    {/* El checked , la parte del setTip cuando es 0 y verifica que el tipOption  */}
                </div>
            ))}
        </form>
    </div>
  )
}

export default TipPercentageForm
