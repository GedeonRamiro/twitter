import { useLocation } from "react-router-dom"

import { Container, Button, Title } from "./styles"
import { FaTwitter } from 'react-icons/fa'
import { BsPerson } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'

const Sidebar = () => {

    const location = useLocation()
    console.log(location.pathname)

    return (
        <Container>
           <FaTwitter color="#ffffff" size={25}/> 

           <Button isSelected={location.pathname === '/'}>
               <FaTwitter color="#ffffff" size={25}/> 
               <Title>Página Inicial</Title>
           </Button>
           <Button isSelected={location.pathname === '/perfil'}>
               <BsPerson color="#ffffff" size={25}/> 
               <Title>Perfil</Title>
           </Button>
           <Button>
               <FiLogOut color="#ffffff" size={25}/> 
               <Title>fazer Logout</Title>
           </Button>
       </Container>
    )
}

export default Sidebar