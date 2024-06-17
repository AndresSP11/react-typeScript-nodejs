import React, { useState } from 'react'
import { categories } from '../data/categories'

const Form = () => {
    /* Recordar que tenemos en cuenta quqe la actividad es un objeto */
    const [activity,setActivity]=useState({
        category:1,
        name:'',
        calories:0
    });

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setActivity({
            ...activity,
            [e.target.id]:e.target.value
    })
    }
    console.log(activity);
  return (
    <form className=' space-y-5 bg-white shadow p-10 rounded-lg'>
        <div className=' grid grid-cols-1 gap-3'>
            
            <label htmlFor="category" className=' font-bold'>Categoría: </label>
            <select className=' border border-slate-300 p-2 rounded-lg w-full bg-white'
            id='category'
            value={activity.category}
            onChange={handleChange}
            >
                {
                    categories.map((category)=>(
                        <option 
                        value={category.id}
                        key={category.id}
                        >{category.name}
                        </option>
                    ))
                }
            </select>
        </div>

        <div className=' grid grid-cols-1 gap-3 '>
            <label htmlFor="activity" className=' font-bold'>Actividad: </label>
            <input 
            id='name'
            type="text"
            className=' border border-slate-300 p-2  rounded-lg'
            placeholder='Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio,Pesas, Bicicleta ' 
            value={activity.name}
            onChange={handleChange}/>
        </div>

        <div className=' grid grid-cols-1 gap-3 '>
            <label htmlFor="calories" className=' font-bold'>Calorias: </label>
            <input 
            id='calories'
            type="text"
            className=' border border-slate-300 p-2  rounded-lg'
            placeholder='Calorias. ej. 300 o 500 '
            onChange={handleChange} />
        </div>

        <input type="submit"
        className=' bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded'
        value='GUARDAR COMIDA O GUARDAR EJERCICIO' />
    </form>
  )
}

export default Form
