
import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import api, { apiWithAuth } from '../../services/api'
import { InputContainer, Input, DropDown, UserContainer, UserName } from './styles'

interface IUsers {
    name: string;
    username: string;
}


const SearchInput = () => {

    const [isOnFocus, setIsOnFocus] = useState(false)
    const [users, setUsers] = useState<IUsers[]>()
    const [search, setSearch] = useState('')
    
    const searchUsers = async () => {
        const { data } = await apiWithAuth(`users?search=${search}`)
        setUsers(data)
    }

    
    useEffect(() => {
            const timeut = setTimeout(() => {
                searchUsers()
            }, 800)
    
            return () => clearTimeout(timeut)
    }, [search])
    

    return (
         <InputContainer isOnFocus={isOnFocus}>
            <FiSearch />
            <Input
                value={search} 
                placeholder='Buscar no Twitter' 
                onBlur={() => setIsOnFocus(false)}
                onFocus={() => setIsOnFocus(true)}
                onChange={e => setSearch(e.target.value)}
            />
            {users && isOnFocus &&  (
                <DropDown>
                    {users.length > 0 ? users.map((user, index) => (
                        <UserContainer key={index}>
                            <img src={`https://lorempixel.com/400/400/cats/${user.username}/`} />
                            <UserName> 
                                <h1>{user.name}</h1>
                                <h2>@{user.username}</h2>    
                            </UserName>
                        </UserContainer>
                    )) :
                    <UserName> 
                    <h1>usuário não encontrado</h1>
                </UserName>
                    }
                </DropDown>
            )}
        </InputContainer>
    )
}

export default SearchInput