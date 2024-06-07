import React from "react";
import './style.css'
import Question from "./Question";
import questions from './Info'
function App(){
    return(
        <div className="container">
            <h3>سوالی برایتان پیش آمده؟</h3>
            <div className="info">
                {
                    questions.map((item , index) => <Question key={index} {...item} /> )
                }
            </div>
        </div>
    )
}

export default App