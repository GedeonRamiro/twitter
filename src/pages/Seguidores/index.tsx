import PageWrapper from "../../components/PageWrapper"
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {FixedContentContainer, FixedContentTexts, FollowerContainer, FollowerTitle} from './style'
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
            <h1>Pagina de seguidores</h1>
        </PageWrapper>
    )
}

export default Seguidores