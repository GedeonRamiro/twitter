import {Container, TweetNames, TweetText, } from './styles'

interface IProps {
    name: string;
    username: string;
}

const Tweet: React.FC<IProps> = ({ children, name, username }) => {
    return (
        <Container>
            <img src={`https://lorempixel.com/400/400/cats/${name}/`} />
            <div> 
            <TweetNames>
                    <h1>{name}</h1>
                    <h2>@{username}</h2>
            </TweetNames>
                <TweetText>
                    <p>{children}</p>
                </TweetText>

            </div>

        </Container>
    )
}

export default Tweet