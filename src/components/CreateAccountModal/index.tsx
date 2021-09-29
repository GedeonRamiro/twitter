
import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { toast } from 'react-toastify';

import validadeCreateAccountFiedls from "../../utils/validadeCreateAccountFiedls";
import api from '../../services/api'
import  Button from "../Button";
import { Input } from "../Input";
import Modal from "../Modal";
import { CenterImage, InputContainer, Title } from "./styles"

toast.configure()

interface IProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const CreateAccountModal:React.FC<IProps> = ({ isOpen, setIsOpen }) => {


    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const isDisabled = 
        name === '' || username === '' || email === '' || password === '' 
        
    const createAccount = async () => {
        const validation = validadeCreateAccountFiedls(name, username, email, password)

        if(typeof validation === 'string'){
            return toast.error(validation)
        }
        
        try{
            await api.post('/users', {
                name,
                username,
                email,
                password
            })
            toast.success('Conta criada com sucesso!')
        } catch(error){
            console.log({error})
            toast.error(error?.response?.data?.message || 'ANão foi possível criar a conta!')
        }
        
    }

    const onClose = () => {
        setName('')
        setUsername('')
        setEmail('')
        setPassword('')
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose}>
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
                    value={username} 
                    onChange={event => setUsername(event.target.value)} 
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
            <Button height='47px' width='100%' isDisabled={isDisabled} onClick={createAccount}>Avançar</Button>
        </Modal>
    )
}

export default CreateAccountModal;