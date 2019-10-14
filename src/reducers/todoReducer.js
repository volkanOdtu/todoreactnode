
import { FETCH_TODOS ,NEW_TODO ,DELETE_TODO ,UPDATE_TODO ,UPDATE_TODO_TEXT } from "../actions/todoAction";


const initialState = {
    todos: [] ,
    todo:{},
    txtNewTodo:''
};

const todoReducer = (state =initialState ,action)=>{
    
    switch(action.type)
    {        
        case FETCH_TODOS:
            return {
                ...state,
                todos:action.payload
            }
        case NEW_TODO:            
            return Object.assign({} ,state ,
                { todos:[...state.todos ,{id : action.payload.id ,item: action.payload.item ,completed:0 }]  })
            
       case DELETE_TODO:
            return Object.assign({} ,state ,
                            {todos:state.todos.filter( (item ,index) =>  item.id !== action.payload) })
            
        case UPDATE_TODO_TEXT:               
                return {
                    ...state,
                    txtNewTodo : action.payload
                }
                //return{ txtNewTodo :action.payload }
        case UPDATE_TODO:         
             
             return Object.assign({} , state ,{ todos: state.todos.map(todo =>{
                 if(todo.id === action.payload )
                    return Object.assign({} ,todo ,{ completed: !todo.completed })
                return todo;
             } ) });
                                          
        default:
            return state;
    }
}

export default todoReducer;