import React from "react"
import { GlobalApp } from "../Contexts/Context";
function Card() {
  const {add , DeleteHandler , DoneHandler} = GlobalApp();
  return (
    <div className="mb-3">
        {
          add.length === 0 ? <li className="text-danger ms-3 fs-5 mt-1">There is nothing to do</li>  : add.map((item , index) => {
            return (
                <div className=' cards-show' key={index}>
                  <div className="d-flex tasks">
                    <div className='border-end border-danger ms-2 mt-2 pe-2'>{item.Number}</div>
                    {
                      item.done ? <div className='mt-2 text-primary ms-2'> {item.title} </div> : <div className='mt-2 ms-2'> {item.title} </div>
                    }
                    
                  </div>
                  <div className="signs">
                    {
                      item.done ? "" : <a onClick={() => DeleteHandler(item.key)} className="text-danger text-decoration">delete</a>
                    }
                    {
                      item.done ? <li className="text-primary">selected</li>
                      : <a onClick={() => DoneHandler(item.key)} className="text-success text-decoration">Submit</a>

                    }
                    
                  </div>
                </div>
            )
          })
        }
    </div>
  )
}

export default Card