
import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { InputContainer, Input, DropDown, UserContainer, UserName } from './styles'

interface IUsers {
    id: string;
    name: string;
    username: string;
}

const mockUsers = [
    {id: '1', name: 'gedeon', username: 'gedeon_goku'},
    {id: '2', name: 'ramiro', username: 'ramiro_vejeta'},
    {id: '3', name: 'bastos', username: 'bastos_gohan'},
    {id: '4', name: 'costa', username: 'costa_truck'},
    {id: '5', name: 'nicolas', username: 'nicolas_broly'},
    {id: '7', name: 'davi', username: 'davi_gokublack'},
    {id: '8', name: 'rayssa', username: 'rayssa_bulma'},
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
                        <UserContainer>
                            <img src={`https://lorempixel.com/400/400/cats/${user.id}`} />
                            <UserName> 
                                <h1>{user.name}</h1>
                                <h2>@{user.username}</h2>    
                            </UserName>
                        </UserContainer>
                        
                    ))}
                </DropDown>
            )}
        </InputContainer>
    )
}

export default SeachInput