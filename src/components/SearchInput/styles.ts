import styled from 'styled-components'

interface IProps{
    isOnFocus: boolean;
}


export const InputContainer = styled.div<IProps>`
    width: 348px;
    padding: 13px;
    background: #202327;
    border: 1px solid
        ${props => props.isOnFocus 
        ? props.theme.color.blue
        : '#253341'};
    box-sizing: border-box;
    border-radius: 40px;
    display: flex;
    align-items: center;
    position: relative;

    svg {
        stroke: ${props => props.isOnFocus 
            ? props.theme.color.blue 
            : props.theme.color.gray}
    }
`

export const Input = styled.input`
    outline: none;
    border: none;
    background-color: #202327;
    color: #fff;
    font-size: 15px;
    margin-left: 13px;
    width: 100%;

    &::placeholder{
       color: ${props => props.theme.color.gray}
    }
`
export const DropDown = styled.div`
    position: absolute;
    background: #000;
    left: 0;
    top: 54px;
    width: 304px;
    border: 1px solid #2F3336;
    padding: 20px;
    border-radius: 8px;
    padding: 20px;
`

export const UserContainer = styled.div `
    display: flex;
    align-items: center;

    img {
        height: 49px;
        width: 49px;
        border-radius: 50%;
    }

    &:not(:last-child) {
        margin-bottom: 14px;
    }

`

export const UserName = styled.div `
    font-size: 15px;
    margin-left: 10px;
    line-height: 18px;

    h1{
        font-weight: 700;
    }

    h2 {
        color: ${props => props.theme.color.gray}
    }

`
