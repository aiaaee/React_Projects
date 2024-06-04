import React from "react";

let todosContext = React.createContext({
    todos : [] ,
    add : () => {}, 
    done : () => {} ,
    edit : () => {} ,
    delete : () => {} 
    
}) 

export default todosContext