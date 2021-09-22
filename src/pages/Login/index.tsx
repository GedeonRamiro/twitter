import Background from '../../assets/images/login-bg.png'
import { 
    Button, 
    Container, 
    BackgroundConatiner, 
    RightContainer 
} from "./styles"
import { FaTwitter } from 'react-icons/fa'
import CreateAccountModal from '../../components/CreateAccountModal'
import LoginModal from '../../components/LoginModal'
import { useState } from 'react'


const Login = () => {

    const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false)
    const [isLoginModalOpen, setILoginModalOpen] = useState(false)

    return (
        <Container>
            <CreateAccountModal 
                isOpen={isCreateAccountModalOpen}
                setIsOpen={setIsCreateAccountModalOpen} 
            />
            <LoginModal 
                isOpen={isLoginModalOpen}
                setIsOpen={setILoginModalOpen} 
            />
            <BackgroundConatiner>
                <img src={Background} alt="Fundo fdo Twitter" />
            </BackgroundConatiner>
            <RightContainer>
                <FaTwitter color='#d9d9d9d' size={40} /> 
                <h1>Acontecendo agora</h1>
                <h2>Inscreva-se no Twitter hoje mesmo.</h2>
                <Button onClick={() => setIsCreateAccountModalOpen(true)}>
                    Inscreva-se com o email...
                </Button>
                <p>Já tem uma conta? <span onClick={() => setILoginModalOpen(true)} > Entre </span></p>
            </RightContainer>
        </Container>
    )
}

export default Login