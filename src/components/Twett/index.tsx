import {Container, TweetNames, TweetText, } from './styles'

interface IProps {
    name: string;
    username: string;
}

const Tweet: React.FC<IProps> = ({ children, name, username }) => {
    return (
        <Container>
            <TweetNames>
                <div>
                    <img src={`https://lorempixel.com/400/400/cats/${name}/`} />
                </div>
                <h1>{name}</h1>
                <h2>@{username}</h2>
            </TweetNames>
            <TweetText>
                <p>{children}</p>
            </TweetText>

        </Container>
    )
}

export default Tweet