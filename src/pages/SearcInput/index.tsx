
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { InputContainer, Input } from './styles'

const SeachInput = () => {

    const [isOnFocus, setIsOnFocus] = useState(false)

    return (
        <InputContainer isOnFocus={isOnFocus}>
            <FiSearch />
            <Input 
                placeholder="Buscar no Twitter" 
                onBlur={() => setIsOnFocus(false)}
                onFocus={() => setIsOnFocus(true)}
            />
        </InputContainer>
    )
}

export default SeachInput