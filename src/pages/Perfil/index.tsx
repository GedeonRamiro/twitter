import PageWrapper from "../../components/PageWrapper"
import {BsArrowLeft} from 'react-icons/bs'
import { Link } from "react-router-dom"
import { FixedContentContainer, FixedContentTexts } from "./styles"



const Perfil = () => {
    return (
      
      <PageWrapper
        fixedContent={
          <FixedContentContainer>
            <Link to='/'>
                <BsArrowLeft size={25} />
            </Link>
            <FixedContentTexts>
              <h1>Olá</h1>
              <h2>11 Tweets</h2>
            </FixedContentTexts>  
          </FixedContentContainer>
        }
      >

        Página de perfil
      </PageWrapper>

      )
}

export default Perfil