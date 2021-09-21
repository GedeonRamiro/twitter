import React from "react";
import { FaTwitter } from "react-icons/fa";
import Modal from "../Modal";
import { CenterImage, Title } from "./styles"

interface IProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const CreateAccountModal:React.FC<IProps> = ({ isOpen, setIsOpen }) => {
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <CenterImage>
                <FaTwitter color='#d9d9d9d' size={32} /> 
            </CenterImage>
            <Title>
                <h1>Criar sua conta</h1>
            </Title>
            <button>Faça login</button>
        </Modal>
    )
}

export default CreateAccountModal;