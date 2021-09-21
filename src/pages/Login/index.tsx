import Background from '../../assets/images/login-bg.png'
import { 
    Button, 
    Container, 
    BackgroundConatiner, 
    RightContainer 
} from "./styles"
import { FaTwitter } from 'react-icons/fa'
import CreateAccountMod from '../../components/CreateAccountModal'
import { useState } from 'react'


const Login = () => {

    const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] = useState(false)
    const [isLoginModalOpen, setILoginModalOpen] = useState(false)

    return (
        <Container>
            <CreateAccountMod 
                isOpen={isCreateAccountModalOpen}
                setIsOpen={setIsCreateAccountModalOpen} 
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
                <p>Já tem uma conta? <span> Entre </span></p>
            </RightContainer>
        </Container>
    )
}

export default Login