import styled from "styled-components";
import { Button } from "react-bootstrap";
const DivTaskList=styled.div`
    background-color:#336666;
    font-family:fantasy;
    color:white;
    margin:10px;
    padding:5px;
`;

const TaskList = ({task}) => {
    /*
        https://todolistvrs2.netlify.app/
        https://github.com/gustindvr/pending-tasks
        https://whimsical.com/K6eKqyzyGErdCmqNCiKzxQ
    */
    return ( 
        <DivTaskList key={task.id}>
            <h5>{task.title}</h5>
            <p>{task.description}</p>
            <Button variant="danger">Eliminar</Button>{' '}            
            <Button variant="warning">Modificar</Button>{' '}
        </DivTaskList> 
    );
}
 
export default TaskList;