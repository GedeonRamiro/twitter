
import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";
import validadeLoginFiedls from "../../utils/validadeLoginFiedls";
import api from '../../services/api'
import  Button from "../Button";
import { Input } from "../Input";
import Modal from "../Modal";
import { CenterImage, InputContainer, Title } from "./styles"
import { IAuth, useGlobalState } from '../../context/GlobalContext'



interface IProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const LoginModal:React.FC<IProps> = ({ isOpen, setIsOpen }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const { setAuth } = useGlobalState()

    const history = useHistory()
    const isDisabled = email === '' || password === '' || loading
        
    const createAccount = async () => {
        const validation = validadeLoginFiedls(email, password)

        if(typeof validation === 'string'){
            return toast.error(validation)
        }

        try{
        setLoading(true)
        const { data }  = await api.post<IAuth>('/login', {
                email,
                password
            })
          setAuth(data)
          history.push('/')  
        } catch(error){
            toast.error(error?.response?.data?.message || 'Não foi possível acessar a conta!')
        }
        setLoading(false)
    }

    const onClose = () => {
        setEmail('')
        setPassword('')
        setLoading(false)
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose}>
            <CenterImage>
                <FaTwitter color='#d9d9d9d' size={28} /> 
            </CenterImage>
            <Title>
                Enter no Twitter
            </Title>
            <InputContainer>
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
            <Button height='47px' width='100%' isDisabled={isDisabled} onClick={createAccount}>Fazer login</Button>
        </Modal>
    )
}

export default LoginModal;