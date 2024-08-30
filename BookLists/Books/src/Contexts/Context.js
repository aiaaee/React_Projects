import React, { createContext, useContext, useState } from "react";


let AppContext = createContext()

let AppProvider = ({children}) => {
    const [input , setInput] = useState(''); 
    const [add , setAdd] = useState([]);
    const [selected , setSelected]  = useState([]);
    const [alarm , setAlarm] = useState('');

    const AddHandler = (e) => {
        e.preventDefault()
        if(input.length > 0 ){
            setAdd([...add ,
                {Number : add.length + 1 ,  title : input , done : false , key:Date.now()}
            ])
            setAlarm('')
        }
        else{
            setAlarm('Please input your tasks')
            return
        }
        setInput('')
    }

    const DeleteHandler = (keyItem) => {
        let new_item = add.filter(item => item.key !== keyItem)
        if(confirm("are you sure you want to delete your item ? ")){
            setAdd(new_item)
            alert("your tasks deleted")
        }
        else{
            return
        }
    }
    
    const DoneHandler = (keyItem) => {
        let DoneItem = add.find(select => select.key === keyItem );
        DoneItem.done = true

        setSelected([...selected , DoneItem])
    }
    
    
    return <AppContext.Provider value={{selected , alarm , DoneHandler , DeleteHandler , setInput , input , add , AddHandler }}> {children} </AppContext.Provider>
}

let GlobalApp = () => {
    return useContext(AppContext)
}

export {AppContext , AppProvider , GlobalApp}