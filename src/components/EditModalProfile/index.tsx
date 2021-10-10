import Button from '../Button'
import Modal from '../Modal/'
import { ModalBody, ModalHeader } from './styles'
import {MdClose} from 'react-icons/md'
import { Input } from '../Input'

interface IProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}


const EditModalProfile:React.FC<IProps> = ({ isOpen, setIsOpen }) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
            <ModalHeader>
                <MdClose size={30} onClick={() => setIsOpen(false)}/>
                <h1>Editar Perfil</h1>
                <Button background='#fff' color="#000">Salvar</Button>
            </ModalHeader>
            <ModalBody>
                <Input placeholder='Nome' />
                <Input placeholder='Bio' />
                <Input placeholder='Passoword' type='password' />
            </ModalBody>
        </Modal>
    )
}

export default EditModalProfile