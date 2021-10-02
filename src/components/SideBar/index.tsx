import { Link, useLocation } from "react-router-dom"

import { Container, Button, Title, IconContainer } from "./styles"
import { FaTwitter } from 'react-icons/fa'
import { BsPerson } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { useGlobalState } from '../../context/GlobalContext'

const Sidebar = () => {

    const location = useLocation()

    const { removeAuth } = useGlobalState() 
    
    const logout = () => {
        removeAuth()
    }

    return (
        <Container>
           <IconContainer>
                <FaTwitter color="#ffffff" size={25}/> 
           </ IconContainer> 
            <Link to='/'>
                <Button isSelected={location.pathname === '/'}>
                    <FaTwitter color="#ffffff" size={25}/> 
                    <Title>Página Inicial</Title>
                </Button>
            </Link>
            <Link to='/perfil'>
                <Button isSelected={location.pathname === '/perfil'}>
                    <BsPerson color="#ffffff" size={25}/> 
                    <Title>Perfil</Title>
                </Button>
            </Link>
            <Link to='/login'>
                <Button onClick={logout}>
                    <FiLogOut color="#ffffff" size={25}/> 
                    <Title>fazer Logout</Title>
                </Button>
            </Link>
       </Container>
    )
}

export default Sidebar