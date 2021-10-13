import styled from 'styled-components'

interface IProps {
    isSelected?: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    a {
        cursor: default;
        width: max-content;
    }
`

export const IconContainer = styled.div`
    padding-left: 11px;
`

export const Button = styled.button<IProps>`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    padding: 0;
    margin-top: 20px;
    cursor: pointer;
    width: max-content;
    padding: 11px;
    border-radius: 53px;
    background-color: ${props => 
        props.isSelected ? props.theme.color.blue + "20" : "none"};
        outline: none;
        
`

export const Title = styled.h1`
    background: none;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    margin-left: 20px;
`