import PageWrapper from "../../components/PageWrapper"
import {BsArrowLeft} from 'react-icons/bs'
import {FaRegCalendarAlt} from 'react-icons/fa'
import { Link, useHistory, useParams } from "react-router-dom"
import { Bio, CreateAt, FixedContentContainer, FixedContentTexts, Follower, ImageContainer, Name, TextContainer, UserName } from "./styles"
import Button from "../../components/Button"
import { apiWithAuth } from "../../services/api"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import Tweet from "../../components/Twett"
import EditModalProfile from "../../components/EditModalProfile"
import { IAuth, useGlobalState } from "../../context/GlobalContext"



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
  isFollowing: boolean
}

interface IParams {
  username: string
}

const Perfil = () => {
    
  const [profile, setProfile] = useState<IProfile>()
  const [isEditProfileOpenModal, setIsEditProfileOpenModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const { auth: {user} } = useGlobalState() as {auth: IAuth}

  const { username } = useParams<IParams>()

  const isMyProfile = !username || username === user.username

  const getProfile = async () => {
    try {
      const {data} = await apiWithAuth.get(isMyProfile ? '/profile' : `users/${username}`)
      setProfile(data)
      
    } catch (error) {
      toast.error(error?.response?.data?.message 
        || 'Não foi possível acessar o perfil!', 
        {theme: 'dark'})
    }
    setLoading(false)
  }

  const follows  = async (follow_user_id: string) => {
    setLoading(true)
    try {
        await apiWithAuth.post('/follows', {
          follow_user_id,
        })
        getProfile()
    } catch (error) {
      console.log({error})
      toast.error(error?.response?.data?.message?.join(', ') || 
        'Não foi possível seguir o usuário!', 
        {theme: 'dark'})
    }
  }

  const unfollows  = async (follow_user_id: string) => {
    setLoading(true)
    try {
        await apiWithAuth.delete('/follows', {
          data: {follow_user_id,}
        })
        getProfile()
    } catch (error) {
      console.log({error})
      toast.error(error?.response?.data?.message?.join(', ') || 
      'Erro unfollows!', 
      {theme: 'dark'})
    }
  }
  
  useEffect(() => {
    getProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username])
  
  return (
      
      <PageWrapper
        fixedContent={
          <>
            {profile && (
          <FixedContentContainer>
                <BsArrowLeft size={25} onClick={() => history.goBack()} />
            <FixedContentTexts>
              <h1>{profile?.name}</h1>
              <h2>{profile?.tweets.length} Tweets</h2>
            </FixedContentTexts>  
            </FixedContentContainer>
            )}
            </>
        }
      >

        <EditModalProfile 
          isOpen={isEditProfileOpenModal} 
          setIsOpen={setIsEditProfileOpenModal} 
          getProfile={getProfile}
        />

        {profile && (

          <>
            <ImageContainer>
              <img src={`https://robohash.org/${profile?.username}/`} alt={profile?.username} />
              {isMyProfile ? (
                 <Button 
                 background='transparent' 
                 border='1px solid #6d777c'
                 onClick={() => setIsEditProfileOpenModal(true)}
               >
                 Editar perfil
               </Button>
              ) : profile.isFollowing ? (
                  <Button 
                    background='transparent' 
                    border='1px solid #6d777c' 
                    onClick={() => unfollows(profile.id)}
                    isDisabled={loading}
                  >
                    Seguindo
                  </Button>
                ) : (
                  <Button 
                    background='#fff' 
                    color='#000' 
                    onClick={() => follows(profile.id)}
                    isDisabled={loading}
                  >
                    Seguir
                  </Button>
                )
                
              }
          </ImageContainer>
          <TextContainer>
            <Name>{profile.name}</Name>
            <UserName>@{profile.username}</UserName>
            <Bio>{profile.bio}</Bio>
            <CreateAt>
              <FaRegCalendarAlt size={18}/>
              <p>Ingressou em {' '}
                {new Date(profile.created_at).toLocaleDateString('pt-BR', {month: 'long'})} 
                {' '} de {' '} 
                {new Date(profile.created_at).getFullYear()}</p>
            </CreateAt>
            <Link to={isMyProfile ? '/perfil/seguidores' : `/perfil/${profile.username}/seguidores` }>
              <Follower>
                <p>{profile.number_of_follows} <span>seguindo</span></p>
                <p>{profile.number_of_followers} <span>seguidores</span></p>
              </Follower>
            </Link>  
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