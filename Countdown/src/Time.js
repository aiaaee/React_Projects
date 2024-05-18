import React from 'react'

function Time(props){
    console.log(props)
    return(
        <div>
            <div className="border circle">
            {props.time.timer}
            </div>
        </div>
    )
}
export default Time