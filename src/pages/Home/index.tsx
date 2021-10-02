
import { apiWithAuth } from "../../services/api";
import { useGlobalState } from "../../context/GlobalContext";

import Sidebar from "../SideBar";
import SeachInput from "../../components/SearchInput";
import Main from "../../components/Main";
import { Container } from './styled'

const Home: React.FC = () => {
  
  return (
    <Container>
      <Sidebar />
          <Main fixedContent={
            <h1 style={{paddingTop: "15px", paddingBottom: "15px"}}>Gedeon Ramiro</h1>
          }>
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
          </Main>
      <SeachInput />
    </Container>
  )
}


export default Home;
