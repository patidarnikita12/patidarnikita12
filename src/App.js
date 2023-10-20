// import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component 
{
    state = { todo: [] }

    constructor(props) 
    {
        super(props)
        this.handleClick = this.handleClick.bind(this)

    }
    
    handleClick(event) 
    {
        event.preventDefault()
        console.log("handleClick is click")
        let newTodo = document.getElementById("addTodo").value
        console.log("Text Readed : " + newTodo)
        console.log(newTodo)
        this.state.todo.push(newTodo)
        console.log(this.state)
        document.getElementById("addTodo").value = ""

        this.state.todo.map((tempTodo) => 
        {
            console.log(tempTodo)
        })
    }
    
    print() 
    {
        console.log("Print is call")
        console.log(this.state)
    }
    
    render() 
    {
        this.print()
        return ( 
            <div>
                <h1> Todo List </h1>        
                <form onSubmit = { this.handleClick }>

                <input type = "text"
                id = "addTodo"/>
                <button type = "submit"> Add To - Do </button>

                </form>        
                <div> 
                    {this.state.todo.map((tempTodo) => 
                        {
                            return <div> { tempTodo.text } </div>
                        })
                    } 
                </div>
            </div>
        );
    }
}

export default App;