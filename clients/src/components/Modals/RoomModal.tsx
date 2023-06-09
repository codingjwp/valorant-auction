import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../Buttons/Button";
import InputField from "../InputFields/InputField";
import Modal, { EssentialModalProps } from "./Modal";
import { useNavigate } from "react-router-dom";



export default function RoomModal({isOpen, setIsOpen}: EssentialModalProps) {
  const navigate = useNavigate();
  const [roomValue, setRoomValue] = useState("");
  const [pwValue, setPwValue] = useState("");


  const handleFormSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    navigate(`rooms/${roomValue}`);
  } 

  const handleRoomChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRoomValue(e.target.value);
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwValue(e.target.value);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="CREATE ROOMS" size="md" >
      <form onSubmit={handleFormSumbit}>
        <InputField id="room-numbers" name="roomnumber" type="text" size="full" decor="red" placeholder="Room Number" value={roomValue} onChange={handleRoomChange} />
        <InputField id="room-password" name="roompw" type="password" size="full" decor="red" placeholder="Room Pw" minLength={8} value={pwValue} onChange={handlePasswordChange} />
        <Button type="submit" name="createRooms" size="half" decor="variant-red" color="white">방생성</Button>
        <Button type="submit" name="createRooms" size="half" decor="variant-red" color="white">방참가</Button>
      </form>
    </Modal>
  );
}