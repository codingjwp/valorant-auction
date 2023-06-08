import { FormEvent } from "react";
import Button from "../Buttons/Button";
import InputField from "../InputFields/InputField";
import Modal, { EssentialModalProps } from "./Modal";



export default function RoomModal({isOpen, setIsOpen}: EssentialModalProps) {

  const handleFormSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  } 

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="CREATE ROOMS" size="md" >
      <form onSubmit={handleFormSumbit}>
        <InputField type="text" size="full" decor="red" placeholder="Room Number" />
        <InputField type="password" size="full" decor="red" placeholder="Room Pw" />
        <Button type="submit" name="createRooms" size="half" decor="variant-red" color="white">방생성</Button>
        <Button type="submit" name="createRooms" size="half" decor="variant-red" color="white">방참가</Button>
      </form>
    </Modal>
  );
}