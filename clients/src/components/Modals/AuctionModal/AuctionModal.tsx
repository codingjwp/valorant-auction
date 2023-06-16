import React from "react";
import Modal from "../Modal";
import Button from "../../Buttons/Button"
import { AuctionCloseeSvg } from "./AuctionModal.styles";

interface AuctionModalProps {
  types: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PersonsHeader = ({title, setIsModalOpen}: {title?: string, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const handleCloseClick = () => { setIsModalOpen(false);}

  return (
    <>
      {title}
      <AuctionCloseeSvg onClick={handleCloseClick}/>
    </>
  )
}

const PersonsMainMember = ({setIsModalOpen}: {setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div>
      <div>
        <Button 
          type="button"
          size="half"
          name="member-register"
          decor="variant-red"
          color="#f5f5f5"
          >등록</Button>
        <Button 
          type="button"
          size="half"
          name="member-closer"
          decor="variant-red"
          color="#f5f5f5"
          onClick={() => setIsModalOpen(false)}>닫기</Button>
        </div>
    </div>
  );
}

const AuctionModal = (props: AuctionModalProps) => {
  return (
    <Modal isOpen={props.isModalOpen} size="md">
      <PersonsHeader title={props.types.toUpperCase()} setIsModalOpen={props.setIsModalOpen} />
      <PersonsMainMember setIsModalOpen={props.setIsModalOpen}/>
    </Modal>
  );
}

export default AuctionModal;