import React from "react";
import Modal from "../Modal";
import DirectorHeader from "./DirectorHeader";
import DirectorMain from "./DirectorMain";


interface DirectorModalProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DirectorModal = (props: DirectorModalProps) => {

  return (
    <Modal size="md" isOpen={props.modalOpen}>
      <DirectorHeader haderTitle="Director Data" setModalOpen={props.setModalOpen} />
      <DirectorMain modalOpen={props.modalOpen} setModalOpen={props.setModalOpen} />
    </Modal>
  )
}

export default DirectorModal;