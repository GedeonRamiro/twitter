import styled from 'styled-components'

interface IProps  {
    isAction: boolean
}

export const FixedContentContainer = styled.div`
    display: flex;
    align-items: center;

    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 28px;
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

export const FollowerContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

export const FollowerTitle = styled.h1<IProps>`
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    padding: 23px 0;
    text-align: center;
    color: ${props => props.isAction ? '#D9D9D9' : '#6D777C'};
    border-bottom: 3px solid ${props => props.isAction ? props.theme.color.blue : 'transparent'};
`

export const UserContainer = styled.div`
    display: flex;
    margin: 22px 20px;

    img{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }

`

export const UserText = styled.div`
    font-size: 15px;
    line-height: 18px;

    h1{
        font-weight:  700;
    }

    h2{
        color: ${props => props.theme.color.gray};
    }

    p{
        margin-top: 8px;
    }
`