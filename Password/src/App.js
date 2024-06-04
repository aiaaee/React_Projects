import React, { useState } from "react";
import './style.css'

import Password from "./Password";

function App(){
    
    return(
    <>
            <div className="wrapper">
                <div className="input-group mb-3 w-25">
                    <Password/>
                </div>
            </div>

    </>
    )
}

export default App