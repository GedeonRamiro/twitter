import Button from '../Button'
import Modal from '../Modal/'
import { ModalHeader } from './styles'
import {MdClose} from 'react-icons/md'

interface IProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}


const EditModalProfile:React.FC<IProps> = ({ isOpen, setIsOpen }) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
            <ModalHeader>
                <MdClose size={30}/>
                <h1>Editar Perfil</h1>
                <Button>Salvar</Button>
            </ModalHeader>
        </Modal>
    )
}

export default EditModalProfile