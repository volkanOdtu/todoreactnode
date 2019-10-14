import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchTodos ,updateTodoText ,updateTodo , createTodo ,deleteTodo} from '../actions/todoAction';

import TodoItem from './TodoItem';
import uuid from 'uuid';

class Todos extends Component {
    constructor()
    {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillMount(){
        this.props.fetchTodos();              
    }
       
    Delete =(id) =>{
        this.props.deleteTodo(id);
    }

    Add = () =>{
        const newTodo = { id:uuid.v4() , item:this.props.txtNewTodo ,completed:0 }        
        this.props.createTodo(newTodo);
        //this.props.todosInState.push(newTodo);
        this.props.updateTodoText('');
        //this.props.fetchTodos(); 
    }

    handleChange(e)
    {
        this.props.updateTodoText(e.target.value);           
    }
    Change = (id) =>
    {
        this.props.updateTodo(id);        
    }
    render() {
        const todos = this.props.todosInState.map( i => <TodoItem id = {i.id}  completed = {i.completed} item = {i.item}  Change = {this.Change}  Delete = {this.Delete} />  )
                                

        return <div className ="todo-list" > 
                    <h2>Todo List</h2>
                    { todos}            
                    <div> 
                        <input type ="text" name = "txtNewTodo" id = "txtNewTodo" value = { this.props.txtNewTodo} onChange = {this.handleChange}  ></input> 
                        <input type ="button" onClick = {() => this.Add()} value = "Add" />                                         
                    </div>                    
                                       
                </div>
    }
}

const mapStateToProps = state =>({
    todosInState: state.todosReducerCombined.todos,
    newTodoInState: state.todosReducerCombined.todo,
    txtNewTodo: state.todosReducerCombined.txtNewTodo
});
export default connect(mapStateToProps ,{fetchTodos ,updateTodoText ,createTodo ,deleteTodo ,updateTodo}) (Todos); 