import React , { useEffect, useReducer, useState} from 'react';

import 'bootstrap/dist/css/bootstrap.css'


// Import Components
import Header from './../Layouts/Header'


// Context
import todosContext from '../Context/todosContext';
import AuthContext from '../Context/AuthContext';

// Reducers
import AppReducers from '../Reducers/AppReducer';

// Import routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Routes/Home';
import About from '../Routes/About';
import Contact from '../Routes/Contact';
import Todo from '../Routes/Todo';


// class App extends Component{

//     state={
//         todos : [] ,
//         authenticated : false
        
//     }
//     addTodo(text){
//         this.setState(prevState => {
//             return{
//                 todos : [
//                     ...prevState.todos , 
//                     {key : Date.now() , done :false , text}
//                 ]
//             }
//         })
//     }
//     doneTodo(key){
//         let {todos} = this.state
//         let items = todos.find(item => item.key == key)
//         items.done = !items.done
//         let newTodos = todos.filter(item => item.key !== key)
//         this.setState(() => {
//             return{
//                 todos :[
//                     ...newTodos ,
//                     items
//                 ]
//             }
//         })
//     }
//     deleteTodo(key){
//         this.setState(prevState => {
//             return{
//                 todos : prevState.todos.filter(item => item.key !== key)
//             }
//         })
//     }
    
//     editTodo(text , key){
//         let { todos } = this.state
//         let items = todos.find(item => item.key == key)
//         items.text = text
//         let newTodos = todos.filter(item => item.key !== key)
//         this.setState(() => {
//             return{
//                 todos : [
//                     ...newTodos , 
//                     items
//                 ]
//             }
//         })
//     }

//     render(){
//     return(

//         <AuthContext.Provider value={{
//             authenticated : this.state.authenticated ,
//             login : () => {this.setState({authenticated : true})} ,
//             logout : () => {this.setState({authenticated : false})} ,

//         }}>

//             <todosContext.Provider value={{
//                 todos : this.state.todos ,
//                 add : this.addTodo.bind(this), 
//                 done :this.doneTodo.bind(this),
//                 delete : this.deleteTodo.bind(this) ,
//                 edit : this.editTodo.bind(this)
//             }}>
//                 <div className="App">
//                     <Header />
//                     <main>
//                         <section className="jumbotron mb-5 pb-5" style={{backgroundColor:"lightgray"}}>
//                             <div className="container  d-flex flex-column align-items-center">
//                                 <h1 className="jumbotron-heading mt-3">Welcome!</h1>
//                                 <p className="lead text-muted">To get started, add some items to your list:</p>
//                                 <FormAddTodo/> 
//                             </div>
//                         </section>
//                         <div className="todosList">
//                             <div className="container">
//                                 <div className="d-flex flex-column align-items-center ">
//                                     <ListTodo  />
//                                 </div>
//                             </div>
//                         </div>
//                     </main>
//                 </div>
//             </todosContext.Provider>
//         </AuthContext.Provider>

//     )
//     }
// }


function App(){
    let [state , dispatch] = useReducer(AppReducers , {
        todos : [] ,
        authenticated : false ,
    })
    
    return(
        <BrowserRouter>
        <AuthContext.Provider value={{
            authenticated : state.authenticated ,
            dispatch , 


        }}>

            <todosContext.Provider value={{
                dispatch ,
                todos :state.todos ,
 
            }}>
                <div className="App">
                    <Header />
                    <main>
                            <Routes>
                                <Route path='/' element={<Home/>}></Route>
                                <Route path='/todos/:id' element={<Todo/>}></Route>
                                <Route path='/about' element={<About/>}></Route>
                                <Route path='/contact' element={<Contact/>} ></Route>
                            </Routes>
                    </main>
                </div>
            </todosContext.Provider>
        </AuthContext.Provider>
        </BrowserRouter>
    )
}


export default App;



