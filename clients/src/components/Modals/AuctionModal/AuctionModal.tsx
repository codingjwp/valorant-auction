import Modal from "../Modal";
import { HeaderProps } from './AuctionModal.styles'
import AuctionModalBntGroup from "./AuctionModalBntGroup";
import AuctionModalHeader from "./AuctionModalHeader";
import AuctionModalMember from "./AuctionModalMember";


const AuctionModal = (props: HeaderProps) => {
  return (
    <Modal isOpen={props.modalOpen as boolean} size="lr">
      <AuctionModalHeader headerTitle={props.headerTitle.toUpperCase()} setModalOpen={props.setModalOpen} />
      <div>
        <AuctionModalMember />
        <AuctionModalBntGroup setModalOpen={props.setModalOpen}/>
      </div>
    </Modal>
  );
}

export default AuctionModal;