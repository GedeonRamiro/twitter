import styled from 'styled-components'

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 348px;
    background: #202327;
    border: 1px solid #253341;
    box-sizing: border-box;
    border-radius: 40px;
    padding: 13px;
`

export const Input = styled.input`
    border: none;
    outline: none;
    background: #202327;
    color: #fff;
    margin-left: 13px;

    &::placeholder{
       color: ${props => props.theme.color.gray}
    }
`