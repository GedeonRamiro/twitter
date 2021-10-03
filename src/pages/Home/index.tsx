
import api, { apiWithAuth } from "../../services/api";
import { IAuth, useGlobalState } from "../../context/GlobalContext";

import PageWrapper from "../../components/PageWrapper";
import { TweetButton, TweetContainer, TweetInput, UserName } from "./styles";
import Button from "../../components/Button";
import Tweet from "../../components/Twett";
import { useEffect, useState } from "react";

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

      const [tweets, setTweets] = useState<ITweet[]>([])

  const { auth: {user} } = useGlobalState() as {auth: IAuth}

  const getTweet = async () => {

      const { data } = await apiWithAuth.get<ITweet[]>('/feed')
      setTweets(data)
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
        <TweetInput placeholder="O que está acontecendo?" />
      </TweetContainer>
      <TweetButton>
          <Button>Tweet</Button>
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
