import TaskList from "./taskList";
import styled from "styled-components";

const DivTasksList=styled.div`
    background-image:url("https://media.istockphoto.com/vectors/realistic-light-white-brick-wall-background-distressed-overlay-of-vector-id1181393673?k=6&m=1181393673&s=612x612&w=0&h=UJUYLNN4WreB32og3iT6IYNXQE5SrJNKQmaH1XFEDC0=");
    height:700px;
    border: 2px solid black;
    border-radius:15px;
    margin-top:10px;
    padding:15px;
    `;
const TasksList = ({tasks,setTasks, addTasks,deleteTask,setShowModal}) => {
    return ( 
    <DivTasksList>
        {tasks.map(task=><TaskList key={task.id} task={task} tasks={tasks} setTasks={setTasks} addTasks={addTasks} deleteTask={deleteTask} setShowModal={setShowModal}/>)}
    </DivTasksList>
    );
}
 
export default TasksList;