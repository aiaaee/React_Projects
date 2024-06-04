import React, { Component } from 'react'
import todosContext from '../Context/todosContext'
import AuthContext from '../Context/AuthContext'
import instance from './../../Api/todo'
class FormAddTodo extends Component{
    static contextType = todosContext
    state ={
        text : ''
    }
    formHandler(e){
        e.preventDefault()
        if(this.state.text.length > 1){
                
            //  Ajax
            let todo = {text: this.state.text , done : false}
            instance.post('/todos.json' , todo)
            .then(response => this.context.dispatch({type:'add_todo' , payload : {todo : {...todo , key : response.data.name}}}))
            .catch(err => console.log(err))
            this.setState({text : ''})
        }

        
    }
    inputHandler(e){
        this.setState({
            text : e.target.value
        })
    }
    
    render(){
        return(
                <AuthContext.Consumer>
                    {
                        context => (
                            <>
                                {
                                    context.authenticated == true ? 
                                        <form className="form-inline" onSubmit={this.formHandler.bind(this)}>
                                            <div className="form-group d-flex">
                                                <input onChange={this.inputHandler.bind(this)} value={this.state.text} type="text"  className="form-control mx-sm-3" placeholder="i want to do ..."/>
                                                <button   className="btn btn-primary">add</button>
                                            </div>
                                        </form>
                                    : 
                                    <p> you must be Login</p>
                                }
                            </>
                        )
                    }
                </AuthContext.Consumer>
        )
    }
}


export default FormAddTodo