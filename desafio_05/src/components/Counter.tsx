import {useState} from 'react'

function Counter(){

    const[count, setCont] = useState(0)
   
    const increment = (value:number) => {
        setCont(count + value);
    }

    const decrement = (value:number) => {
        setCont(count - value);
    }

    const reset =() => {
        setCont(0)
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen bg-gray-900'>
            <div className='bg-indigo-700 p-3 rounded-3xl w-auto'>
                <h1 className='text-center pb-3 text-xl text-slate-50'>Contador - Desafio 5</h1>
                <h4 className='text-right text-9xl text-black bg-green-300 rounded-3xl pb-5'>{count}</h4>
                <div className='flex gap-2 justify-center mt-5'>
                    <div className='flex flex-col '>
                        <button className="bg-black hover:bg-gray-900  text-white px-4 py-2 rounded-2xl shadow-md hover:shadow-gray-400" onClick={() => increment(1)}>+1</button>
                        <button className="bg-black hover:bg-gray-900 text-white px-4 py-2 mt-2 rounded-2xl shadow-md hover:shadow-gray-400" onClick={() => increment(10)}>+10</button>
                        <button className="bg-black hover:bg-gray-900 text-white px-4 py-2 mt-2 rounded-2xl shadow-md hover:shadow-gray-400" onClick={() => increment(100)}>+100</button>  
                    </div>
                    <div className='flex flex-col'>
                        <button className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-2xl shadow-md hover:shadow-gray-400" onClick={() => decrement(1)}>-1</button>
                        <button className="bg-black hover:bg-gray-900 text-white px-4 py-2 mt-2 rounded-2xl shadow-md hover:shadow-gray-400" onClick={() => decrement(10)}>-10</button>
                        <button className="bg-black hover:bg-gray-900 text-white px-4 py-2 mt-2 rounded-2xl shadow-md hover:shadow-gray-400" onClick={() => decrement(100)}>-100</button>
                    </div>
                    <button className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-3xl shadow-lg hover:shadow-gray-400" onClick={() => reset()}>Reset</button>
                </div>
                
            </div>
            
            
        </div>
    )
}

export default Counter