import Modal, { EssentialModalProps } from "../components/Modals/Modal";


export default function RoomModal({isOpen, setIsOpen}: EssentialModalProps) {

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="CREATE ROOMS" size="md" >
      <form>
        <input type="text" />
        <input type="text" />
        <button>test</button>
        <button>test</button>
      </form>
    </Modal>
  );
}