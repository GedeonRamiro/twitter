import styled from "styled-components";

export const Background = styled.div`
    top: 0;
    left: 0;
    background-color: #ffffff45;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
`

export const Center = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
    background-color: #000000;
    padding: 20px 30px 30px;
    width: 600px;
`