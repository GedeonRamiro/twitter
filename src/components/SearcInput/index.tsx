
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { InputContainer, Input, DropDown } from './styles'

interface IUsers {
    name: string;
    username: string;
}

const mockUsers = [
    {name: 'gedeon', username: 'gd'},
    {name: 'ramiro', username: 'rmr'},
]

const SeachInput = () => {

    const [isOnFocus, setIsOnFocus] = useState(false)
    const [users, setUsers] = useState<IUsers[]>(mockUsers)



    return (
         <InputContainer isOnFocus={isOnFocus}>
            <FiSearch />
            <Input 
                placeholder="Buscar no Twitter" 
                onBlur={() => setIsOnFocus(false)}
                onFocus={() => setIsOnFocus(true)}
            />
            {users && (
                <DropDown>
                    {users.map(user => (
                        <h1>{user.name}</h1>
                    ))}
                </DropDown>
            )}
        </InputContainer>
    )
}

export default SeachInput