import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import  Button from "../Button";
import { Input } from "../Input";
import Modal from "../Modal";
import { CenterImage, InputContainer, Title } from "./styles"

interface IProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const CreateAccountModal:React.FC<IProps> = ({ isOpen, setIsOpen }) => {

    
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isDisabled = 
        name === '' || userName === '' || email === '' || password === ''   

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <CenterImage>
                <FaTwitter color='#d9d9d9d' size={28} /> 
            </CenterImage>
            <Title>
                Criar sua conta
            </Title>
            <InputContainer>
                <Input 
                    placeholder='Nome' 
                    value={name} 
                    onChange={event => setName(event.target.value)}
                />
                <Input 
                    placeholder='User name' 
                    value={userName} 
                    onChange={event => setUserName(event.target.value)} 
                />
                <Input 
                    placeholder='E-mial' 
                    type='email' 
                    value={email} 
                    onChange={event => setEmail(event.target.value)}
                />
                <Input 
                    placeholder='password' 
                    type='password' 
                    value={password} 
                    onChange={event => setPassword(event.target.value)}
                />
            </InputContainer>
            <Button height='47px' width='100%' isDisabled={isDisabled}>Avançar</Button>
        </Modal>
    )
}

export default CreateAccountModal;