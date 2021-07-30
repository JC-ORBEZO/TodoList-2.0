import styled from "styled-components"; 
import {Container,Row,Col,Button} from "react-bootstrap";
import TasksForm from "./tasksForm";
import TasksList from "./tasksList";
import { useState } from "react";
//styled component en Div
const NewHomePage=styled.div`
    background-image: url("https://media.istockphoto.com/photos/green-damask-pattern-background-picture-id823602724?k=6&m=823602724&s=612x612&w=0&h=K_Xs-HZSlk4yybkQMUxHNPTc_yhZjqFNTxl-o3log8Y=");
    margin: auto;
    width:100%;
    height:720px;    
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
`;

//styled component en Col de React-Bootstrap
const NewCol=styled(Col)`
    align-items:center;
`;

const PageOne = ({mostrarPortada}) => {
    const [tasks,setTasks]=useState([]);
    //Agregar nueva tarea
    const addTasks=(task)=>{
        setTasks([...tasks,task]);
    }
    return ( 
        <NewHomePage>
            <NewContainer>
            {/*<Header/>*/}
                <NewRow>
                    <NewCol md={4} xs={12}>
                        <NewButton onClick={()=>mostrarPortada()}>VOLVER</NewButton>
                        <TasksForm tasks={tasks} addTasks={addTasks} setTasks={setTasks}/>
                        
                    </NewCol>
                    <NewCol md={8} xs={12}><TasksList tasks={tasks}/></NewCol>
                </NewRow>
            </NewContainer>
            
        </NewHomePage>
     );
}
 
export default PageOne;