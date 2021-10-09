import PageWrapper from "../../components/PageWrapper"
import {BsArrowLeft} from 'react-icons/bs'
import {FaRegCalendarAlt} from 'react-icons/fa'
import { Link } from "react-router-dom"
import { Bio, CreateAt, FixedContentContainer, FixedContentTexts, Follower, ImageContainer, Name, TextContainer, UserName } from "./styles"
import Button from "../../components/Button"
import { apiWithAuth } from "../../services/api"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Tweet from "../../components/Twett"
import EditModalProfile from "../../components/EditModalProfile"



interface ITweets {
  id:	string
  content:	string
}

interface IProfile{
  id:	string
  name:	string
  bio: string
  username:	string
  email: string
  created_at:	string
  updated_at:	string
  number_of_followers: number
  number_of_follows: number
  tweets:ITweets[]
}

const Perfil = () => {
    
  const [profile, setProfile] = useState<IProfile>()
  const [isEditProfilModalOpen, setIsEditProfilModalOpen] = useState(false)

  const getprofile = async () => {
    try {
      const {data} = await apiWithAuth.get('/profile')
      setProfile(data)
      
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Não foi possível acessar o perfil!', {theme: 'dark'})
    }
  }
  
  useEffect(() => {
    getprofile()
  }, [])
  
  return (
      
      
      <PageWrapper
        fixedContent={
          <>
          {profile && (
            <FixedContentContainer>
              <Link to='/'>
                  <BsArrowLeft size={25} />
              </Link>
              <FixedContentTexts>
                <h1>{profile?.name}</h1>
                <h2>{profile?.tweets.length} Tweets</h2>
              </FixedContentTexts>  
            </FixedContentContainer>
          )}
          </>  
        }
      >

        <EditModalProfile isOpen={isEditProfilModalOpen} setIsOpen={setIsEditProfilModalOpen} />

        {profile && (
          <>
            <ImageContainer>
              <img src={`https://lorempixel.com/400/400/cats/${profile?.username}/`} alt={profile?.username} />
              <Button 
                  background='transparent' 
                  border='1px solid #6d777c' 
                  onClick={() => setIsEditProfilModalOpen(true)}>
                    Editar perfil
              </Button>
          </ImageContainer>
          <TextContainer>
            <Name>{profile.name}</Name>
            <UserName>@{profile.username}</UserName>
            <Bio>{profile.bio}</Bio>
            <CreateAt>
              <FaRegCalendarAlt size={18}/>
              <p>Ingressou em {' '}
                {new Date(profile.created_at).toLocaleDateString('pt-BR', {month: 'long'})} 
                de {' '} 
                {new Date(profile.created_at).getFullYear()}</p>
            </CreateAt>  
              <Follower>
                <p>{profile.number_of_follows} <span>seguindo</span></p>
                <p>{profile.number_of_followers} <span>seguidores</span></p>
              </Follower>
          </TextContainer>

          {profile.tweets.map(tweet => (
              <Tweet 
                key={tweet.id} 
                name={profile.name} 
                username={profile.username}
              >
                  {tweet.content}
              </Tweet>
          ))}
       </>
        )}
      
      </PageWrapper>

      )
}

export default Perfil