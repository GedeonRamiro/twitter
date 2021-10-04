import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    padding: 15px;
    &:not(:last-child){
        border-bottom: 1px solid ${props => props.theme.color.borderColor};
    }

    img{
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }  
`

export const TweetNames = styled.div`
    display: flex;
    padding-bottom: 5px;
    align-items: center;
    
    h1{
        font-size: 15px;
        line-height: 18px;
        font-weight: 700;
        margin-left: 10px;
        
    }
    
    h2{
        font-size: 12px;
        line-height: 18px;
        color: ${props => props.theme.color.gray};
        margin-left: 5px;
    }
    `

export const TweetText = styled.div`
        font-size: 12px;
        line-height: 14px;
        margin-left: 10px;
    `