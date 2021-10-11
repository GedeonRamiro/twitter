import Button from '../Button'
import Modal from '../Modal/'
import { ModalBody, ModalHeader } from './styles'
import {MdClose} from 'react-icons/md'
import { Input } from '../Input'
import { useState } from 'react'
import { apiWithAuth } from '../../services/api'
import { toast } from 'react-toastify'
import { useGlobalState } from '../../context/GlobalContext'


interface IProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    getProfile: () => void;
}

interface IResponse {

  id: string,
  name: string,
  bio: string | null,
  username: string,
  email: string
}


const EditModalProfile:React.FC<IProps> = ({ isOpen, setIsOpen, getProfile }) => {

    const [name, setName] = useState('')
    const [bio, setBio] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const {setName: setUserName} = useGlobalState()

    const isDisabled = (name === '' && bio === '' && password === '') ||
    (password.length > 0 && password.length < 8) ||
    loading

    const editUser = async () => {

        let requestBody = {}

        if(name !== ''){
             requestBody = {name}
         }
        if(bio !== ''){
            requestBody = {...requestBody, bio}
         }
        if(password.length >= 8){
            requestBody = {...requestBody, password}
         }

         setLoading(true)
         try {
             const { data } = await apiWithAuth.put<IResponse>('/profile', requestBody)
             setUserName(data.name)
             handleOnCloseModal(true)
         } catch (error) {
            console.log({error})
            toast.error(error?.response?.data?.message || 'Não foi possivel atualizar seu perfil', {theme: 'dark'})
         }
         setLoading(false)

    }

    const handleOnCloseModal = (reloadPage = false) => {
        setName('')
        setBio('')
        setPassword('')
        setIsOpen(false)
        reloadPage && getProfile()
    }


    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} onClose={handleOnCloseModal}>
            <ModalHeader>
                <MdClose size={30} onClick={() => handleOnCloseModal()}/>
                <h1>Editar Perfil</h1>
                <Button 
                    background='#fff' 
                    color="#000"
                    isDisabled={isDisabled} 
                    onClick={editUser}>Salvar
                </Button>
            </ModalHeader>
            <ModalBody>
                <Input 
                    placeholder='Nome'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Input 
                    placeholder='Bio'
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                />
                <Input 
                    placeholder='Passoword (min. 8 caracteres)' type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </ModalBody>
        </Modal>
    )
}

export default EditModalProfile