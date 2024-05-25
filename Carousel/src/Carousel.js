import React, { useState } from "react";


function Carousel(props){
    let { answer , question , id} = props
    const [state , setState] = useState({
        statusDone : false
    })
    function PosClickHandler(){
        setState(prevState => {
            console.log(prevState.statusDone)
            return{
                statusDone : !prevState.statusDone
            }
        })
    }
    return(
        <div className="ClickDefiner fs-6 p-1  border border-3 ">
                <li className={`${state.statusDone ? "border-bottom" : ""}`}>
                    <span className="ps-2 mt-3">{id}.{question}</span>
                    <button className=" btn  m-2" onClick={PosClickHandler}>{
                        state.statusDone ? "-" : "+"
                    }
                    </button>
                    
                </li>
                    {
                        state.statusDone ?
                        
                        <div>
                            <div className="p-2" style={{fontSize:'12px'}}>{answer}</div>
                        </div>
                        :
                        ""
                    }
        </div>
    )
}
export default Carousel
