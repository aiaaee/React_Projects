import React from "react";


let AuthContext = React.createContext({
    authenticated : false ,
    login : () => { } , 
    logout : () => {}
})


export default AuthContext