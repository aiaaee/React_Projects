import React from 'react'
import { GlobalApp } from '../Contexts/Context';
function InputSection() {
  const {setInput , alarm , input , AddHandler} = GlobalApp();
  return (
    <div style={{width:'400px'}} className='bg-dark text-white circle rounded  m-5 p-3'>
        <form onSubmit={AddHandler}>
            <label className='ms-1 mb-1 text-info'>Todos Input : </label>
                <input type='text' onChange={(e) => setInput(e.target.value)} value={input} className="form-control" placeholder='Input Your tasks' /> 
                {
                  alarm ? <div className='mt-2 ms-2'><small className='text-danger'>{alarm}</small></div> : ""
                }
                <button className='btn btn-primary mt-3 text-center border text-white'>Submit</button>
        </form>
    </div>
  )
}

export default InputSection