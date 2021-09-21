import styled from 'styled-components'

export const Input = styled.input`
    font-size: 16px;
    outline: none;
    background: none;
    padding: 20px 12px;
    color: #fff;
    border: 1px solid rgba(167, 185, 198, 0.3);
    box-sizing: border-box;
    border-radius: 4px;

&::placeholder{
    color: #A7B9C673;
}

&:focus {
    border: 1px solid ${(props) => props.theme.color.blue};
}
`