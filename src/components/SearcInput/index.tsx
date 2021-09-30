
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { InputContainer, Input, DropDawn } from './styles'

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
            <DropDawn>
                <h1>blblblldfgdfb</h1>
                <h1>dhgdfdxfg</h1>
                <h1>blblblghmjhjlb</h1>
            </DropDawn>
        </InputContainer>
    )
}

export default SeachInput