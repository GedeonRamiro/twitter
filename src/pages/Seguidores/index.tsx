import PageWrapper from "../../components/PageWrapper"
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {
    FixedContentContainer, 
    FixedContentTexts, 
    FollowerContainer, 
    FollowerTitle, 
    UserContainer,
    UserText
} from './style'
import { IAuth, useGlobalState } from "../../context/GlobalContext"
import { useEffect, useState } from "react"
import { apiWithAuth } from "../../services/api"

interface IUser {
        id: string,
        name: string,
        bio: string | null,
        username: string,
        email: string,
}

interface IFollows{
    follows: IUser[]
    followers: IUser[]
}

const Seguidores = () => {

    const { auth: {user} } = useGlobalState() as {auth: IAuth}

    const [data, setData] = useState<IFollows>()
    const [showFollows, setShowFollows] = useState(true)
    console.log(data?.followers)

    const getFollows = async () => {
        const { data } = await apiWithAuth.get<IFollows>('profile/follows')
        setData(data)
    }

    useEffect(() => {
        getFollows()
    }, [])

    return (
        <PageWrapper
            fixedContent={
             <>   
                <FixedContentContainer>
                    <Link to='/perfil'>
                        <BsArrowLeft size={25} />
                    </Link>
                    <FixedContentTexts>
                        <h1>{user.name}</h1>
                    </FixedContentTexts>  
                </FixedContentContainer>
                <FollowerContainer>
                    <FollowerTitle isAction={showFollows} onClick={() => setShowFollows(true)}>
                        Seguidores
                    </FollowerTitle>
                    <FollowerTitle isAction={!showFollows} onClick={() => setShowFollows(false)}>
                        Seguindo
                    </FollowerTitle>
                </FollowerContainer>
            </>    
            }
        >

          {showFollows ? (
            
            data?.followers.map(followers => (
                <Link to={`/perfil/${followers.username}`} key={followers.id}>
                    <UserContainer>
                        <img src={`https://robohash.org/${followers.username}/`}  alt={followers.name}/>
                        <UserText>
                            <h1>{followers.name}</h1>
                            <h2>@{followers.username}</h2>
                            <p>{followers.bio}</p>
                        </UserText>
                    </UserContainer>
                </Link>  
            ))

            ) : (
            data?.follows.map(follows => (
                <Link to={`/perfil/${follows.username}`} key={follows.id}>
                    <UserContainer>
                        <img src={`https://robohash.org/${follows.username}/`}  alt={follows.name}/>
                        <UserText>
                            <h1>{follows.name}</h1>
                            <h2>@{follows.username}</h2>
                            <p>{follows.bio}</p>
                        </UserText>
                    </UserContainer>
                </Link>   

            ))
        )} 

        </PageWrapper>
    )
}

export default Seguidores