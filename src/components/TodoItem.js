import React, { Component } from 'react'

export default class TodoItem extends Component {
    
    render()
     {
        let styleCompleted = {
            "color":"red",
            "textDecoration": "line-through"
        }
        let styleNotCompleted = {
            "color":"black"        
        }
        let styleVal =  styleNotCompleted;

        if(this.props.completed)
             styleVal =  styleCompleted;

        return (
            
            <div className ="todo-item">                
                    <input type="checkbox" checked ={this.props.completed} 
                            onChange = {() =>this.props.Change(this.props.id)} /> 
                        <p style ={styleVal} > {this.props.item} </p>
                    <div style = {{ 'margin-left': '10px' ,'margin-bottom': '15px' }} >  
                        <input type ="button" onClick = {() => this.props.Delete(this.props.id)} value = "Delete" />            
                    </div>                 
            </div>
        )
    }
}

//export default TodoItem ; // connect(null ,{createTodo})(TodoItem);