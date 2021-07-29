import { Form,Button } from "react-bootstrap";
import shortId from "short-id";
import styled from "styled-components";

const NewForm=styled(Form)`
    background-image:url("https://media.istockphoto.com/illustrations/gold-wallpaper-with-damask-pattern-illustration-id1044886574?k=6&m=1044886574&s=612x612&w=0&h=ywOlaHUpXq0h5bpXvvC0g46ebdvtpHuTqKeGaC22iUk=");
    padding:10px;
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Titulo</Form.Label>
                <Form.Control type="text" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">ENVIAR</Button>
        </NewForm>
      );
}
 
export default TasksForm;