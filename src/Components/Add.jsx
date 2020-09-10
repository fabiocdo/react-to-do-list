import React, { Component } from 'react';
import '../Flex.css'
import { Button, FormControl, InputGroup, FormLabel } from 'react-bootstrap';

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
            <div>
                <FormLabel className="title">Adicionar nova tarefa</FormLabel>
                <InputGroup>
                    <FormControl className="col-5 mb-2" type="text" onChange={this.descriptionHandler} value={description}/>                            
                    <Button type="button" className="mb-2 ml-2" onClick={this.submitButtonHandler}>Add</Button>                    
                </InputGroup>
            </div>
        );
    }

    descriptionHandler = (arg) => {
        const description = arg.target.value;

        this.setState({
          description
        });
    }

    submitButtonHandler = () => {
        const { setNewTask } = this.props;

        if(this.state.description){
            setNewTask(this.state.description);
        }

        this.setState({
            description: ''
        });
        
    }
}

export default Add;