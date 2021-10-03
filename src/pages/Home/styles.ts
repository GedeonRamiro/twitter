import styled from 'styled-components'

export const UserName = styled.div`
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    padding-bottom: 25px;
    padding-top: 25px;
    border-bottom: 1px solid ${props => props.theme.color.borderColor};
    padding-left: 15px;
    padding-right: 15px;
`

export const TweetContainer = styled.div`
    margin-top:  10px;
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    
    img{
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }  
`

export const TweetInput = styled.input`
    display: block;
    height: max-content;
    outline: none;
    border: none;
    background-color: #000;
    color: #fff;
    font-size: 19px;
    line-height: 23px;
    margin-left: 12px;
    width: 100%;

    &::placeholder {
        color: ${props => props.theme.colorgray}
    }
`

export const TweetButton = styled.div`
    margin-top: 18px;
    margin-bottom: 10px;
    text-align: right;
    padding-right: 20px;
`