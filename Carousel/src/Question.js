import React, { useState } from "react";
import {AiOutlineMinus , AiOutlinePlus} from 'react-icons/ai' 
function Question({id , title , info}){
    console.log(id,  title , info)
    const [showInfo , setShowInfo] = useState(false)
    return(
        <div className="question">
            <header>
                <h4>
                    {
                        title
                    }
                </h4>
                <button onClick={() => setShowInfo(!showInfo)}>
                    {
                        showInfo ? <AiOutlineMinus/> : <AiOutlinePlus /> 
                    }
                </button>
            </header>
            {
                showInfo && <p>
                    {info}
                </p>
            }
        </div>
    )
}


export default Question