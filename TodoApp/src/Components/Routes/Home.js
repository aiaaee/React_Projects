import React, { useContext , useState , useEffect } from "react"
import todosContext from "../Context/todosContext"
import FormAddTodo from "../Todo/FormAddtodo"
import ListTodo from "../Todo/ListTodo"
import instance from "../../Api/todo"
function Home(){
    let [loading , setLoading] = useState(false)
    
    let TodosContext = useContext(todosContext)
    useEffect(() => {
        setLoading(true)
        instance.get('/todos.json')
            .then((response) => console.log(jsonHandler(response.data)))
            .catch(err => console.log(err))
    } , [])

    
    let jsonHandler = (data) => {
        setLoading(false)
        let todos =  Object.entries(data).map(([key , value]) => {
            return{...value , key}
        })
    
    TodosContext.dispatch({type : 'init_todo' , payload : {todos}})
        
    }
    return(
        <>
            <section className="jumbotron mb-5 pb-5" style={{backgroundColor:"lightgray"}}>
                <div className="container  d-flex flex-column align-items-center">
                    <h1 className="jumbotron-heading mt-3">Welcome!</h1>
                    <p className="lead text-muted">To get started, add some items to your list:</p>
                    <FormAddTodo/> 
                </div>
            </section>
            <div className="todosList">
                <div className="container">
                    <div className="d-flex flex-column align-items-center ">
                        {
                            loading?
                            <h2>Loading ...</h2>
                            :
                            <ListTodo  />
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home