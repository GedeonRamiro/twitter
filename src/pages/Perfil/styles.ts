import styled from 'styled-components'

export const FixedContentContainer = styled.div`
    display: flex;
    align-items: center;

    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 28px;

    svg{
        cursor: pointer;
    }
`

export const FixedContentTexts = styled.div`
    margin-left: 23px;

    h1{
        font-weight: bold;
        font-size:19px;
        line-height: 23px;
    }

    h2{
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #6d777c;

    }

`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 15px;

    img{
        border-radius: 50%;
        width: 136px;
        height: 136px;
    }
`

export const TextContainer = styled.div`
    padding-top: 15px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 22px;
    border-bottom: 1px solid ${props => props.theme.color.borderColor};
`

export const Name =  styled.h1`
    font-size: 19px;
    line-height: 23px;
    color: #d9d9d9;

`

export const UserName =  styled.h2`
    font-size: 14px;
    line-height: 17px;
    color: #6d777c;
`

export const Bio =  styled.p`
    font-size: 15px;
    line-height: 18px;
    color: #d9d9d9;
    margin-top: 12px;
    margin-bottom: 12px;
`

export const CreateAt = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    line-height: 18px;
    color: #6d777c;
    margin-bottom: 12px;
    
    p{
        margin-left: 7px;
        color: #6d777c;
    }
`

export const Follower = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    line-height: 18px;
    color: #d9d9d9;

    p {
       
        &:first-child {
        padding-right: 8px;
     }
        font-weight: bold;
    }

    span{
        color: #6d777c;
        font-weight: 400;
    }
`