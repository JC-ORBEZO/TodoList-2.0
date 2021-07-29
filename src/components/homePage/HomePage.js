import styled from "styled-components";
import { Button } from "react-bootstrap";

//styled component en Div
const NewHomePage=styled.div`
    background-image: url("https://www.istockphoto.com/resources/images/HomePage/Tiles/Illustrations-we-love-1201935568.jpg");
    margin: auto;
    width:100%;
    height:720px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    `;

//styled component en Buttond de React-Bootstrap
const NewButton=styled(Button)`    
    width: 240px;
    height: 80px;
    font-size: 40px;
    font-family: 'Zen Tokyo Zoo', cursive;
    opacity: 0.8;
`;

//styled de Header
const NewH1=styled.h1`
    background-color: #CCFFCC;
    color: #0033CC;
    text-align:justify;
    font-size: 50px;
    font-family: 'Zen Tokyo Zoo', cursive;
    opacity: 0.8;
    display:flex;
    justify-content:center;
`;

const Header=()=>{
    return(
        <NewH1>TODO LIST</NewH1>
    );
}

const HomePage = ({ocultarPortada}) => {
    return (
        <NewHomePage>
            <Header/>
            <NewButton onClick={()=>ocultarPortada()}>INGRESAR</NewButton>
        </NewHomePage>
      );
}
 
export default HomePage;