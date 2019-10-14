
export const FETCH_TODOS = 'FETCH_TODOS';
export const NEW_TODO = 'NEW_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_TODO_TEXT = 'UPDATE_TODO_TEXT';
export const DELETE_TODO = 'DELETE_TODO';


export const updateTodoText = (val) =>fn =>{ 
    fn({type:UPDATE_TODO_TEXT ,payload:val });
};

export const updateTodo =( id) =>({ type:UPDATE_TODO ,payload:id });

export const fetchTodos = () => fn =>
{
    fetch('http://localhost:5000')
            .then(res =>res.json())
            .then(todos => fn({ type:FETCH_TODOS ,payload:todos })  );     
};

export const createTodo = (newTodo) => fn =>
{      
    
    fetch('http://localhost:5000' ,{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(newTodo)
        }).then(res=>res.json())
          .then(fn({ type:NEW_TODO ,payload:newTodo })  ) ;
}

export const deleteTodo = (id) => fn =>{
    
    fetch('http://localhost:5000' ,{
            method: 'DELETE',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify( {'id' :id })
        }).then(res=>res.json())
          .then( fn({ type:DELETE_TODO ,payload:id })  ) ;
}

