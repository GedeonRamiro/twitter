import Modal from '../Modal/'
import { Container } from './styles'

interface IProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}


const EditModalProfile:React.FC<IProps> = ({ isOpen, setIsOpen}) => {
    return (
        <Container>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
                Modal profile
            </Modal>
        </Container>
    )
}

export default EditModalProfile