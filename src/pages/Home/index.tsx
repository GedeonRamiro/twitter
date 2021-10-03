
import { apiWithAuth } from "../../services/api";
import { IAuth, useGlobalState } from "../../context/GlobalContext";

import PageWrapper from "../../components/PageWrapper";
import { TweetButton, TweetContainer, TweetInput, UserName } from "./styles";
import Button from "../../components/Button";
import Tweet from "../../components/Twett";


const Home = () => {

  const { auth: {user} } = useGlobalState() as {auth: IAuth}

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
      <Tweet name={user.name} username={user.username}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum suscipit hic officiis debitis, harum quas commodi 
            voluptas aliquid numquam nostrum. Corporis deserunt officia 
            voluptates tempore distinctio aliquam quos incidunt commodi?
      </Tweet>
      <Tweet name={user.name} username={user.username}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum suscipit hic officiis debitis, harum quas commodi 
            voluptas aliquid numquam nostrum. Corporis deserunt officia 
            voluptates tempore distinctio aliquam quos incidunt commodi?
      </Tweet>
      <Tweet name={user.name} username={user.username}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum suscipit hic officiis debitis, harum quas commodi 
            voluptas aliquid numquam nostrum. Corporis deserunt officia 
            voluptates tempore distinctio aliquam quos incidunt commodi?
      </Tweet>
      <Tweet name={user.name} username={user.username}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum suscipit hic officiis debitis, harum quas commodi 
            voluptas aliquid numquam nostrum. Corporis deserunt officia 
            voluptates tempore distinctio aliquam quos incidunt commodi?
      </Tweet>
      <Tweet name={user.name} username={user.username}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum suscipit hic officiis debitis, harum quas commodi 
            voluptas aliquid numquam nostrum. Corporis deserunt officia 
            voluptates tempore distinctio aliquam quos incidunt commodi?
      </Tweet>
      <Tweet name={user.name} username={user.username}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum suscipit hic officiis debitis, harum quas commodi 
            voluptas aliquid numquam nostrum. Corporis deserunt officia 
            voluptates tempore distinctio aliquam quos incidunt commodi?
      </Tweet>
      <Tweet name={user.name} username={user.username}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum suscipit hic officiis debitis, harum quas commodi 
            voluptas aliquid numquam nostrum. Corporis deserunt officia 
            voluptates tempore distinctio aliquam quos incidunt commodi?
      </Tweet>
      <Tweet name={user.name} username={user.username}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum suscipit hic officiis debitis, harum quas commodi 
            voluptas aliquid numquam nostrum. Corporis deserunt officia 
            voluptates tempore distinctio aliquam quos incidunt commodi?
      </Tweet>
      <Tweet name={user.name} username={user.username}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum suscipit hic officiis debitis, harum quas commodi 
            voluptas aliquid numquam nostrum. Corporis deserunt officia 
            voluptates tempore distinctio aliquam quos incidunt commodi?
      </Tweet>
      <Tweet name={user.name} username={user.username}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum suscipit hic officiis debitis, harum quas commodi 
            voluptas aliquid numquam nostrum. Corporis deserunt officia 
            voluptates tempore distinctio aliquam quos incidunt commodi?
      </Tweet>
      <Tweet name={user.name} username={user.username}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Rerum suscipit hic officiis debitis, harum quas commodi 
            voluptas aliquid numquam nostrum. Corporis deserunt officia 
            voluptates tempore distinctio aliquam quos incidunt commodi?
      </Tweet>
             
      </ PageWrapper>
  )
}


export default Home;
