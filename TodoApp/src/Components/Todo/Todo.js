import React, { useContext, useState } from "react";
import EditTodo from './EditTodo'
import todosContext from "../Context/todosContext";
import instance from './../../Api/todo'
import { Link } from "react-router-dom";
function Todo(props){

    let TodosContext = useContext(todosContext)
    let [edit , setEdit] = useState(false)
    let {keyData , statusDone} = props
    function formHandler(text){
        instance.put(`/todos/${keyData}.json` , {done : props.statusDone , text})
        TodosContext.dispatch({type : "edit_todo" , payload:{text , key :keyData}})
        setEdit(false)
    }
    function deleteHandler(){
        // ajax
        instance.delete(`/todos/${keyData}.json`)
        .then(response => TodosContext.dispatch({type : 'delete_todo' , payload:{key : keyData}}) )
        .catch(err => console.log(err))
        
    }
    function doneHandler(){
        instance.put(`/todos/${keyData}.json` , {done : !props.done , text :props.text })
        .then(response =>TodosContext.dispatch({type : "done_todo" , payload : {key  : keyData}}))
        .catch(err => console.log(err))
        
    }
    return(
            <>
                {
                edit == false ? 
                    <div className="col-6 mb-2">
                        <div className="d-flex justify-content-between align-items-center border rounded p-3">
                            <div>
                                <Link to={`/todos/${props.keyData}`}>
                                    {props.text}
                                </Link>
                            </div>
                            <div>
                                <button type="button" className="btn btn-info btn-sm" onClick={() => setEdit(true)}>edit</button>
                                <button type="button" className="btn btn-danger btn-sm ml-1" onClick={deleteHandler}>delete</button>
                                <button type="button" className={`btn  btn-sm ${statusDone ? "btn-primary": "btn-success" } `} onClick={doneHandler}>{props.statusDone == false ? "done" : "undone"}</button>
                            </div>
                        </div>
                    </div>
                    :
                    <EditTodo formHandler={formHandler} text={props.text} />
                }
            </>
     )
}

export default Todo