import React from 'react'
import Card from './Card'

function ListSection() {
  return (
    <div style={{width:'400px'}} className='m-5 bg-white border-1 border-white border rounded'>
        <div>
            <h2 className='text-center text-dark mt-2'>Tasks</h2>
            <div className='border-top ms-2 me-2'></div>
            <div>
                <Card /> 
            </div>
        </div>
    </div>
  )
}

export default ListSection