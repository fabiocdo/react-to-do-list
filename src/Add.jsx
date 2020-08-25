import React, { Component } from 'react';
import './Flex.css'

class Add extends Component{

    constructor(props){
        super(props);
    
        this.state = {
          description: '',
        }
      }

    render(){

        const { description } = this.state;

        return(
            <>
                <p className="title"> Adicionar nova tarefa</p>
                <div>
                    <input className="inputField" type="text" onChange={this.descriptionHandler} value={description}/>
                    <button className="regularButton" onClick={this.setTask}> Add </button>
                </div>
            </>
        );
    }

    descriptionHandler = (arg) => {

        const description = arg.target.value;

        
        this.setState({
          description
        });
    }

    setTask = () => {}

}

export default Add;