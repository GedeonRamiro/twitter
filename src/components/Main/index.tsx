import { Children } from 'react'
import { Container, FixedContent, ScrollableContainer } from './styles'

interface IProps {
    fixedContent?: JSX.Element
}

const Main: React.FC<IProps> = ( { children, fixedContent } ) => {
    return (
        <Container>
            <FixedContent>{fixedContent}</FixedContent> 
            <ScrollableContainer>{children}</ScrollableContainer>
        </Container>
    )
}

export default Main