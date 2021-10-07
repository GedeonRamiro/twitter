import PageWrapper from "../../components/PageWrapper"
import {BsArrowLeft} from 'react-icons/bs'
import {FaRegCalendarAlt} from 'react-icons/fa'
import { Link } from "react-router-dom"
import { Bio, CreateAt, FixedContentContainer, FixedContentTexts, Follower, ImageContainer, Name, TextContainer, UserName } from "./styles"
import Button from "../../components/Button"


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

        <ImageContainer>
            <img src={`https://lorempixel.com/400/400/cats/1/`} alt="1" />
            <Button>Editar perfil</Button>
        </ImageContainer>
        <TextContainer>
          <Name>Gedeon Ramiro</Name>
          <UserName>@gedeon_ramiro</UserName>
          <Bio>CTO | Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sed amet nihil saepe maiores? Maxime quasi nobis, fuga iure accusantium hic eum iste sunt ea tempora cumque ipsam eos ducimus.</Bio>
          <CreateAt>
            <FaRegCalendarAlt size={18}/>
            <p>Ingressou em janeiro de 2021</p>
          </CreateAt>  
            <Follower>
              <p>500 <span>seguindo</span></p>
              <p>3 <span>seguidores</span></p>
            </Follower>
        </TextContainer>
      
      </PageWrapper>

      )
}

export default Perfil