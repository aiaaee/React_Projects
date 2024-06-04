function AppReducers(prevstate , action){
    console.log(prevstate)
    switch(action.type){
        case 'init_todo' :
            let {todos} = action.payload
            return{
                ...prevstate ,
                todos
            }
        case 'add_todo' :
            return addTodo(prevstate , action)
        case 'done_todo' :
            return doneTodo(prevstate , action)
        
        case 'delete_todo':
            return deleteTodo(prevstate , action)

        case 'edit_todo' :
            return editTodo(prevstate , action)


        case 'login_user':
            return{
                ...prevstate ,
                authenticated : true
            }
        
        case 'logout_user' : 
            return{
                ...prevstate , 
                authenticated : false
            }
    }
}

export default AppReducers

function addTodo(prevstate , action){
        let {todo} = action.payload
        return{
            ...prevstate ,
            todos : [
                ...prevstate.todos , 
                todo 
            ]
        }
}
function doneTodo(prevstate , action){
    let { key } = action.payload
    let items = prevstate.todos.find(item => item.key == key)
    items.done = !items.done
    let newTodos = prevstate.todos.filter(item => item.key !== key)
        return{
            ...prevstate , 
            todos :[
                ...newTodos ,
                items
            ]
        }
}


function deleteTodo(prevstate , action){
        let {key} = action.payload
        return{
            ...prevstate,
            todos : prevstate.todos.filter(item => item.key !== key)
        }
}

function editTodo(prevstate , action){
    let { key , text } = action.payload
    let items = prevstate.todos.find(item => item.key == key)
    items.text = text
    let newTodos = prevstate.todos.filter(item => item.key !== key)
        return{
            ...prevstate ,
            
            todos : [
                ...newTodos , 
                items
            ]
        }
}
