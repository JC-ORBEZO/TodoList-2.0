import styled from "styled-components"; 
import {Container,Row,Col,Button} from "react-bootstrap";
import TasksForm from "./tasksForm";
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
//styled component en Buttond de React-Bootstrap
const NewButton=styled(Button)`    
    width: 240px;
    height: 80px;
    font-size: 40px;
    font-family: 'Zen Tokyo Zoo', cursive;
    opacity: 0.8;
`;
const PageOne = ({mostrarPortada}) => {
    const [tasks,setTasks]=useState([]);
    //Agregar nueva tarea
    const addTasks=(task)=>{
        setTasks([...tasks,task]);
    }
    return ( 
        <NewHomePage>
            <Container>
                <Row>
                    <Col md={6} xs={12}><TasksForm tasks={tasks} addTasks={addTasks} setTasks={setTasks}/></Col>
                    <Col md={6} xs={12}></Col>
                </Row>
            </Container>
            {/*<NewButton onClick={()=>mostrarPortada()}>VOLVER</NewButton>*/}
        </NewHomePage>
     );
}
 
export default PageOne;