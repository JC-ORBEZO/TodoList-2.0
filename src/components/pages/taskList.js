import styled from "styled-components";
import { Button } from "react-bootstrap";
const DivTaskList=styled.div`
    background-color:#336666;
    font-family:fantasy;
    color:white;
    margin:10px;
    padding:5px;
`;

const TaskList = ({task,tasks,setTasks,deleteTask,setShowModal,setTask}) => {
    /*
        https://todolistvrs2.netlify.app/
        https://github.com/gustindvr/pending-tasks
        https://whimsical.com/K6eKqyzyGErdCmqNCiKzxQ
    */
    return ( 
        <DivTaskList key={task.id}>
            <h5>{task.title}</h5>
            <p>{task.description}</p>
            <Button variant="danger" onClick={()=>deleteTask(task.id)}>Eliminar</Button>{' '}            
            <Button variant="warning" onClick={()=>{setShowModal(true);setTask({id:task.id,title:task.title,description:task.description});}}>Modificar</Button>{' '}
        </DivTaskList> 
    );
}
 
export default TaskList;