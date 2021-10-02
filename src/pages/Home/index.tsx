
import { apiWithAuth } from "../../services/api";
import { useGlobalState } from "../../context/GlobalContext";

import PageWrapper from "../../components/PageWrapper";
import { TweetButton, TweetContainer, TweetInput, UserName } from "./styles";
import Button from "../../components/Button";

interface UserName {
  name: string;

}

const Home = () => {


  const { auth } = useGlobalState()

  return (

    <PageWrapper fixedContent={
      <>
      <UserName>
        <h1>{auth?.user.name}</h1>
      </UserName>
      <TweetContainer>
        <img src={`https://lorempixel.com/400/400/cats/${auth?.user.username}/`} />
        <TweetInput placeholder="O que está acontecendo?" />
      </TweetContainer>
      <TweetButton>
          <Button>Tweet</Button>
      </TweetButton>
      </>
    }>
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
             <h1>Meu primeiro Tweet!</h1> 
             <h1>Meu segundo Tweet!</h1> 
             <h1>Meu terceiro Tweet!</h1>
             <div style={{paddingTop: "50px", paddingBottom: "50px"}}></div> 
      </ PageWrapper>
  )
}


export default Home;
