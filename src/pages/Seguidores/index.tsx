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

const Seguidores = () => {

    const { auth: {user} } = useGlobalState() as {auth: IAuth}

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
                    <FollowerTitle isAction={true}>
                        Seguidores
                    </FollowerTitle>
                    <FollowerTitle isAction={false}>
                        Seguindo
                    </FollowerTitle>
                </FollowerContainer>
            </>    
            }
        >
          <Link to={`/perfil/${user.username}`}>
            <UserContainer>
                <img src={`https://robohash.org/${user.username}/`}  alt={user.name}/>
                <UserText>
                    <h1>{user.name}</h1>
                    <h2>@{user.username}</h2>
                    <p>CTO | Front-end</p>
                </UserText>
            </UserContainer>
          </Link>  

        </PageWrapper>
    )
}

export default Seguidores