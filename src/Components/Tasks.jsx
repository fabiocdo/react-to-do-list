import React, { Component } from 'react';
import '../Flex.css';
import { FormLabel, ListGroup, Button, Container, Row } from 'react-bootstrap';

class Tasks extends Component {
    
    constructor(props){
        super(props);
    
        this.state = {
        }
    }
 
    render(){   
        const { taskListArray } = this.props;
        
        return(            
            <div>
                <FormLabel className="title">Lista de tarefas</FormLabel>                
                
                {taskListArray.map((item, index) => ( 
                    <Container fluid >
                        <Row>
                            <ListGroup key={index}>
                                <ListGroup.Item>                
                                    Tarefa #{index}: {item}                       
                                    <Button variant="danger" className="ml-2" onClick={this.deleteButtonHandler} value={index}>X</Button>                    
                                </ListGroup.Item>                            
                            </ListGroup>   
                        </Row>              
                    </Container>
                ))}
            </div>
        );
    }

    deleteButtonHandler = (index) => {
        const { deleteTaskItem } = this.props;

        deleteTaskItem(index);
    }

}

export default Tasks;