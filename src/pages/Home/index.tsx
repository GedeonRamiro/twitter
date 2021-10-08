
import api, { apiWithAuth } from "../../services/api";
import { IAuth, useGlobalState } from "../../context/GlobalContext";

import PageWrapper from "../../components/PageWrapper";
import { TweetButton, TweetContainer, TweetInput, UserName } from "./styles";
import Button from "../../components/Button";
import Tweet from "../../components/Twett";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


interface ITweet {
      id: string,
      content: string,
      user: {
        id: string,
        name: string,
        username: string,
        email: string,
      },
      created_at: string,
}

const Home = () => {

  const { auth: {user} } = useGlobalState() as {auth: IAuth}
  
  const [tweets, setTweets] = useState<ITweet[]>([])
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  
  const getTweet = async () => {
      const { data } = await apiWithAuth.get<ITweet[]>('/feed')
      setTweets(data)
  }

  const createTweet = async () => {
    setLoading(true)

    try {
      await apiWithAuth.post<ITweet[]>('/tweets', { content })
       
       setContent('')
       await getTweet()
      
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message.join(', ') || 'Não foi possível criar Tweet!', {theme: "dark"})
    }

    setLoading(false)
}

  useEffect(() => {
        getTweet()
  }, [])


  return (

    <PageWrapper fixedContent={
      <>
      <UserName>
        <h1>{user.name}</h1>
      </UserName>
      <TweetContainer>
        <img src={`https://lorempixel.com/400/400/cats/${user.username}/`} />
        <TweetInput placeholder="O que está acontecendo?" 
        value={content}
          onChange={event => setContent(event.target.value)}
        />
      </TweetContainer>
      <TweetButton>
          <Button onClick={createTweet} isDisabled={loading || content === ''}>Tweet</Button>
      </TweetButton>
      </>
    }>
      {tweets.map(tweet =>(
      <Tweet name={tweet.user.name} username={tweet.user.username} key={tweet.id}>
           {tweet.content}
      </Tweet>
      ))}
     
      </ PageWrapper>
  )
}


export default Home;
