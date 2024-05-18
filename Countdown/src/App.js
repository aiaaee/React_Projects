import React , { useState } from "react";
import Time from "./Time";
function App(){
    const [state , setState] = useState({
        todos : [] ,
        time : ''
    })
    function formHandler(e){
        e.preventDefault() ;
        console.log(state)
        setState(prevState => {
            return{
                time : prevState.time , 
                todos :{
                    timer : prevState.time , 
                },
            } 
        })
    }
    function changeHandler(e){
        setState({time: e.target.value , todos : []})

    }
    return(
 
        <div>
            <form onSubmit={formHandler}>
            <h2 className="text-center text-dark mt-3">
                Countdown
            </h2>
                <center>
                    <input onChange={changeHandler}  value={state.value} className='m-2 mt-4 form-control w-50 font-25 text-muted' style={{fontSize:"12px"}} placeholder="input your number"/> <button className="btn border border-dark bg-dark text-light mb-3" type="submit">Click</button>
                    
                    <Time form={formHandler} time={state.todos} timer = {state.time} />
                </center>
            </form>

        </div>     
        )
}
export default App