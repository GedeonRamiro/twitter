
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'
import { apiWithAuth } from '../../services/api'
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
                id='search-user-input'
                value={search} 
                placeholder='Buscar no Twitter' 
                onFocus={() => setIsOnFocus(true)}
                onChange={e => setSearch(e.target.value)}
            />
            {users && isOnFocus &&  (
                <DropDown onMouseLeave={() => {setIsOnFocus(false)
                    document.getElementById('search-user-input')?.blur()}
                } >
                    {users.length > 0 ? users.map((user, index) => (
                      <Link key={index} to='' >
                        <UserContainer>
                            <img src={`https://lorempixel.com/400/400/cats/${user.username}/`} />
                            <UserName> 
                                <h1>{user.name}</h1>
                                <h2>@{user.username}</h2>    
                            </UserName>
                        </UserContainer>
                        </Link>
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