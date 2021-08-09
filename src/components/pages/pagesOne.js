import styled from "styled-components"; 
import {Container,Row,Col,Button} from "react-bootstrap";
import TasksForm from "./tasksForm";
import TasksList from "./tasksList";
import Modal from "../modal/modal";
import { useState } from "react";
//styled component en Div
const NewHomePage=styled.div`
    background-image: url("https://media.istockphoto.com/photos/green-damask-pattern-background-picture-id823602724?k=6&m=823602724&s=612x612&w=0&h=K_Xs-HZSlk4yybkQMUxHNPTc_yhZjqFNTxl-o3log8Y=");
    background-size:contain;
    margin: auto;
    width:100%;
    min-height:720px;
    height:auto;
    `;
/*
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
*/
//styled de Header
const NewH1=styled.h1`
    background-color: blue;
    color: white;
    font-size: 50px;
    font-family: 'Zen Tokyo Zoo', cursive;
    opacity: 0.3;
    display:flex;
    justify-content:center;
`;

const Header=()=>{
    return(
        <NewH1>TODO LIST</NewH1>
    );
}

//styled component en Buttond de React-Bootstrap
const NewButton=styled(Button)`    
    width: 240px;
    height: 80px;
    font-size: 40px;
    font-family: 'Zen Tokyo Zoo', cursive;
    opacity: 0.8;
`;

//styled component en Container de React-Bootstrap
const NewContainer=styled(Container)`
    height:100%;
`;

//styled component en Row de React-Bootstrap
const NewRow=styled(Row)`
    justify-content:center;  
    align-items:center;
    flex-wrap:wrap;
`;

//styled component en Col de React-Bootstrap
const NewCol=styled(Col)`
    align-items:center;
`;

const PageOne = ({mostrarPortada}) => {
    const [tasks,setTasks]=useState([]);
    const [showModal,setShowModal]=useState(false);
    const [task,setTask]=useState({});
    //Agregar nueva tarea
    const addTasks=(task)=>{
        setTasks([...tasks,task]);
        localStorage.setItem("tasks", JSON.stringify([...tasks,task]));
    }
    //Para evento eliminar una tarea
    const deleteTask=(id)=>{
        const filtro=tasks.filter(task=>task.id!==id);
        setTasks(filtro);
    }
    return ( 
        <NewHomePage>
            <NewContainer>
            {/*<Header/>*/}
                {showModal ? <Modal task={task} setTask={setTask} tasks={tasks} setTasks={setTasks} setShowModal={setShowModal}/> : null}
                <NewRow>
                    <NewCol md={4} xs={12}>
                        <NewButton onClick={()=>mostrarPortada()}>VOLVER</NewButton>
                        <TasksForm tasks={tasks} addTasks={addTasks} setTasks={setTasks}/>
                        
                    </NewCol>
                    <NewCol md={8} xs={12}>
                        <TasksList task={task} setTask={setTask} tasks={tasks} setTasks={setTasks} addTasks={addTasks} deleteTask={deleteTask} setShowModal={setShowModal}/>
                    </NewCol>
                </NewRow>
            </NewContainer>
            
        </NewHomePage>
     );
}
 
export default PageOne;