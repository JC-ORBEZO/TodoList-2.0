import { useState } from "react";
import { Form,Button} from "react-bootstrap";
const Modal = ({task,setTask,tasks,setTasks,setShowModal}) => {
    const [gid,setId]=useState("");
    const [gtitle,setTitle]=useState("");
    const [gdescription,setDescription]=useState("");
    const objetoModal={id:gid,description:gtitle,title:gdescription};
    /*
        (e)=>setOneTask(e.target.value)
        onChange={(e)=>{objetoModal.title=e.target.value}}
        onChange={(e)=>setTask(description=e.target.value)}
    */
    const posicionEnTasks=(task)=>{
        let contador=0;
        let candado=0;
        tasks.forEach(taskP => {
            taskP.id!==task.id ? contador++ : candado=contador;
        });
        return candado;
    }

   const variador=()=>{
    setId(task.id);
    objetoModal.id=task.id;
    objetoModal.title=gtitle;
    objetoModal.description=gdescription;
    setTask(objetoModal);
    console.log("bart simpson");
    console.log(posicionEnTasks(task));
    console.log(tasks);
    let pos=posicionEnTasks(task);
    console.log(pos);
    /*
    setTasks(tasks[pos]=task);
    console.log(tasks);
    */
   const repositorio=tasks.map(taskp=>taskp);
   repositorio[pos]=objetoModal;
   console.log(repositorio);
   setTasks(repositorio);
   setShowModal(false);
   }
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control defaultValue={task.title} type="text" placeholder="name@example.com" onChange={(e)=>{setTitle(e.target.value)}}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control defaultValue={task.description} as="textarea" rows={3} onChange={(e)=>{setDescription(e.target.value)}}/>
            </Form.Group>
            <Button variant="danger" onClick={()=>setShowModal(false)}>
            Close
            </Button>
            <Button variant="primary" onClick={()=>variador()}>
            Change
            </Button>
        </Form>
    );
}
 
export default Modal;