import Modal from "../Modal";
import RoomHeader from "./RoomHeader";
import RoomForm from "./RoomForm";

interface EssentialModalProps {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const RoomModal = ({isOpen, setIsOpen}: EssentialModalProps) => {

  return (
    <Modal isOpen={isOpen} size="md" >
      <RoomHeader title="ROOM INFORMATION" setIsOpen={setIsOpen} />
      <RoomForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </Modal>
  );
}
export default RoomModal;