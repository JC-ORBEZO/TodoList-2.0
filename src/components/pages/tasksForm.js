import { Form,Button } from "react-bootstrap";
import shortId from "short-id";
import styled from "styled-components";

const NewForm=styled(Form)`
    background-image:url("https://media.istockphoto.com/illustrations/gold-wallpaper-with-damask-pattern-illustration-id1044886574?k=6&m=1044886574&s=612x612&w=0&h=ywOlaHUpXq0h5bpXvvC0g46ebdvtpHuTqKeGaC22iUk=");
    padding:5px;
    min-height:350px;
    font-family:fantasy;
    border:2px solid black;
    border-radius:10px;
    margin-top:15px;
    flex-flow: row wrap;
`;
const TasksForm = ({tasks,addTasks,setTasks}) => {
    const sendForm=(e)=>{
        e.preventDefault();
        console.log(e.target.elements);
        const [title,description]=e.target.elements;
        console.log(title.value);
        console.log(description.value);
        addTasks({id:shortId.generate(),title:title.value,description:description.value});
        //e.target.reset();
    }
    return (
        <NewForm onSubmit={sendForm}>
            <h1 className="text-center">Tareas Pendientes</h1>
            <Form.Group className="mb-3 mt-1 text-center" controlId="exampleForm.ControlInput1">
                <Form.Label><h4>Titulo</h4></Form.Label>
                <Form.Control type="text" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3 mt-1 text-center" controlId="exampleForm.ControlTextarea1">
                <Form.Label><h4>Descripción</h4></Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">ENVIAR</Button>
        </NewForm>
      );
}
 
export default TasksForm;