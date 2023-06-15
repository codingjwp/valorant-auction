import React from "react";
import Modal from "./Modal";
import { ReactComponent as CloseSvg } from "../../assets/svgs/close.svg";
import Button from "../Buttons/Button"
import InputField from "../InputFields/InputField";

interface PersonsModalProps {
  types: string;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PersonsHeader = ({title, setIsModalOpen}: {title?: string, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const handleCloseClick = () => { setIsModalOpen(false);}

  return (
    <>
      {title}
      <CloseSvg onClick={handleCloseClick} />
    </>
  )
}

const PersonsMainDirector = ({setIsModalOpen}: {setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <div>
      <form>
          <Button type="button" size="full" name="director-files" decor="outline-red" color="#f5f5f5">감독</Button>
        <div>
          <Button 
            type="button"
            size="half"
            name="director-register"
            decor="variant-red"
            color="#f5f5f5"
            >등록</Button>
          <Button 
            type="button"
            size="half"
            name="director-closer"
            decor="variant-red"
            color="#f5f5f5"
            onClick={() => setIsModalOpen(false)}>닫기</Button>
        </div>
      </form>
    </div>
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

const PersonsModal = (props: PersonsModalProps) => {
  return (
    <Modal isOpen={props.isModalOpen} size="md">
      <PersonsHeader title={props.types.toUpperCase()} setIsModalOpen={props.setIsModalOpen} />
      {props.types === "director" ? <PersonsMainDirector setIsModalOpen={props.setIsModalOpen} /> : <PersonsMainMember setIsModalOpen={props.setIsModalOpen} />}
    </Modal>
  );
}

export default PersonsModal;