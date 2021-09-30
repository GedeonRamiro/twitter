import styled from 'styled-components'

interface IProps{
    isOnFocus: boolean;
}


export const InputContainer = styled.div<IProps>`
    position: relative;
    display: flex;
    align-items: center;
    width: 348px;
    background: #202327;
    border: 1px solid
    ${props => props.isOnFocus 
    ? props.theme.color.blue
    : '#253341'};
    box-sizing: border-box;
    border-radius: 40px;
    padding: 13px;

    svg {
        stroke: ${props => props.isOnFocus 
        ? props.theme.color.blue 
        : props.theme.color.gray}
    }
`

export const Input = styled.input`
    border: none;
    outline: none;
    background-color: #202327;
    color: #fff;
    margin-left: 13px;
    width: 100%;

    &::placeholder{
       color: ${props => props.theme.color.gray}
    }
`
export const DropDawn = styled.div`
    position: absolute;
    background: red;
    left: 0;
    top: 54px;
    width: 318px;
    border: 1px solid #2F3336;
    padding: 20px;
    border-radius: 8px;

    h1{
        background-color: red;
    }

`