import styled from 'styled-components'


export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-weight: bold;
        font-size: 19px;
        line-height: 23px;
    }

    svg{
        cursor: pointer;
    }

`
export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

  input:not(:last-child){
      margin-bottom: 25px;
  }
`