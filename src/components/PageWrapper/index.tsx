
import Sidebar from "../SideBar"
import SeachInput from "../SearchInput"
import { Container } from "./styles"
import Main from "../Main"


interface IProps {
    fixedContent?: JSX.Element
}


const PageWrapper: React.FC<IProps> = ({ children, fixedContent}) => {
    return (
       <Container>
            <Sidebar />
                <Main fixedContent={fixedContent}>
                    {children}
                </Main>
            <SeachInput />
       </Container>
    )
}

export default PageWrapper