import React, { useContext, useState } from "react";
import Todo from "./Todo";
import todosContext from "../Context/todosContext";


function ListTodo(){
    let TodosContext = useContext(todosContext)
    let {todos} = TodosContext
    let [statusDone  , setDone] = useState(false)
    let filterTodo = todos.filter(item => item.done == statusDone)
    return(
            <>
                <nav className="col-6 mb-3">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className={`nav-item nav-link  font-weight-bold ${!statusDone ? "active" : "" }`} onClick={() => setDone(false)} id="nav-home-tab">undone <span className="badge bg-secondary">{todos.filter(item => item.done == false).length}</span></a>
                        <a className={`nav-item nav-link font-weight-bold ${statusDone ? "active" : ""}`} id="nav-profile-tab" onClick={() => setDone(true)}>done <span className="badge bg-success">{todos.filter(item => item.done == true).length}</span></a>
                    </div>
                </nav>
                {
                    filterTodo.length == 0 ? <p>There is nothing to do</p>
                                            : filterTodo.map((item , index) => <Todo key={index} text={item.text}  keyData={item.key}  statusDone={statusDone} /> ) 
                }
            </>
    )
}

export default ListTodo