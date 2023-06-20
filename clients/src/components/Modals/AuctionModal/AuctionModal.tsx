import { useRef } from "react";
import Modal from "../Modal";
import { HeaderProps } from './AuctionModal.styles'
import AuctionModalBtnGroup from "./AuctionModalBtnGroup";
import AuctionModalHeader from "./AuctionModalHeader";
import AuctionModalMember from "./AuctionModalMember";


const AuctionModal = (props: HeaderProps) => {
  const selectRef = useRef<HTMLSelectElement>(null);

  return (
    <Modal isOpen={props.modalOpen as boolean} size="lr">
      <AuctionModalHeader headerTitle={props.headerTitle.toUpperCase()} setModalOpen={props.setModalOpen} />
      <div>
        <AuctionModalMember selectRef={selectRef} />
        <AuctionModalBtnGroup selectRef={selectRef} setModalOpen={props.setModalOpen} />
      </div>
    </Modal>
  );
}

export default AuctionModal;