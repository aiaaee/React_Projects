import React , {useState} from "react";
import Icon from "react-icons-kit";
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import './style.css'
function Password(){
    const [icon , setIcon] = useState(eye)
    const [type , setType] = useState('password')
    
    let typeClick = () => {
        if(type == 'password'){
            setType('text')
            setIcon(eyeOff)
        }
        else{

            setType('password')
            setIcon(eyeOff)
        }
    }
    return(
        <>
            <input type={type} className="form-control" placeholder="Please enter your password" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
                <span className="input-group-text" onClick={typeClick} id="basic-addon2">
                    <Icon icon={icon} size={25}  /> 
                </span>
            </div>
        </>
        
    )
}

export default Password