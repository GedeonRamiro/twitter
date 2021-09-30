
import { FiSearch } from 'react-icons/fi'
import { InputContainer, Input } from './styles'

const SeachInput = () => {
    return (
        <InputContainer>
            <FiSearch color="#8899A6" />
            <Input placeholder="Buscar no Twitter" />
        </InputContainer>
    )
}

export default SeachInput