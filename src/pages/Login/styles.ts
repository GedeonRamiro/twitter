import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    
`

export const BackgroundConatiner = styled.div `
   img{
    height: 100%;
    width: 100%;
    object-fit: cover;
   }
    
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 30px;
    height: 100vh;
    
    
    h1 {
        font-size: 64px;
        font-style: normal;
        font-weight: 700;
        line-height: 83px;
        margin-top: 60px;
        margin-bottom: 32px;
    }
    
    h2{
        font-size: 31px;
        font-style: normal;
        font-weight: 700;
        line-height: 40px;
        margin-bottom: 32px;
    }
    
    p{
        font-size: 16px;
        font-style: normal;
        line-height: 19px;
        margin-top: 26px;
    }

    span{
        color: ${(props) => props.theme.color.blue};
        cursor: pointer;
    }

`

export const Button = styled.button`
    background-color: #fff;
    color: #000;
    height: 49px;
    width: 381px;
    border-radius: 70px;
    padding: 14px, 92px, 14px, 92px;
    border: 0;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
`

