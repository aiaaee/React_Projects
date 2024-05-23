import React, { useState } from "react";
import './style.css'

function App(){
    const [state , setState] = useState({
        todos : [] , 
        answer1 : '' , 
        statusDone : false
    })

    function PosClickHandler(){
        setState(prevState => {
            console.log(prevState.statusDone)
            return { 
                answer1:"Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art." , 
                statusDone : !prevState.statusDone
            }
        })
    }
    
    console.log(state)
    
    return(
        <div className="QAcontent container border border-1 rounded p-3">
            <h2 className="p-3 ">
                Question And Answer About Login
            </h2>
            <div className="ClickDefiner fs-5 p-1  border border-3 ">
                <li className={`${state.statusDone ? "border-bottom" : ""}`}>
                    <span className="ps-2">1. Do I have to follow the use of cookes?</span>
                    <button className=" btn  m-2" onClick={PosClickHandler}>{
                        state.statusDone ? "-" : "+"
                    }
                    </button>
                    
                </li>
                    {
                        state.statusDone ?
                        
                        <div>
                            <div className="p-2 fs-6">{state.answer1}</div>
                        </div>
                        :
                        ""
                    }
            </div>

            
            
        </div>
    )
}
export default App
