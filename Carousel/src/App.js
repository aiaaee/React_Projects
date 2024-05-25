import React, { useState } from "react";
import './style.css'
import Carousel from "./Carousel";

function App(){
    const [state , ] = useState({
        todos : [
            {id : 1 , question : " Do I have to follow the use of cookes?" , answer :  "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."  } ,
            {id : 2 , question : "How do I change my My Page password?" , answer : "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."} , 
            {id : 3 , question : "What is BankID?" , answer : "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial."} , 

        ] , 
        statusDone : false
    })
    

    let CarouselShow = state.todos.map((item , index) => <Carousel statusDone={state.statusDone} question={item.question} answer={item.answer} id={item.id} key={index}   /> )

    
    
    return(
        <div className="QAcontent container border border-1 rounded p-3">
            <h2 className="p-3 ">
                Question And Answer About Login
            </h2>
            {
                CarouselShow
            }
            
            
        </div>
    )
}
export default App
