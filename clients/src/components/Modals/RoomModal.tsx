import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../Buttons/Button";
import InputField from "../InputFields/InputField";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CloseSvg } from '../../assets/svgs/close.svg'
import { ReactComponent as ToolTipSvg } from '../../assets/svgs/tooltip.svg'
import ToolTips from "../ToolTips/ToolTips";


interface EssentialModalProps {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}


const RoomFrom = ({setIsOpen}: {setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [roomValue, setRoomValue] = useState("");
  const [pwValue, setPwValue] = useState("");
  const navigate = useNavigate();

  const handleFormSumbit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(false);
    navigate(`rooms?number=${roomValue}`);
  } 

  const handleRoomChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRoomValue(e.target.value.replace(/[^a-zA-Z0-9]/g, ''));
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwValue(e.target.value);
  }

  return (
    <form onSubmit={handleFormSumbit}>
      <InputField id="room-numbers" name="roomnumber" type="text" size="full" decor="red" placeholder="Room Number" value={roomValue} onChange={handleRoomChange} />
      <InputField id="room-password" name="roompw" type="password" size="full" decor="red" placeholder="Room Pw" minLength={8} value={pwValue} onChange={handlePasswordChange} />
      <Button type="submit" name="createRooms" size="half" decor="variant-red" color="white">방생성</Button>
      <Button type="submit" name="createRooms" size="half" decor="variant-red" color="white">방참가</Button>
    </form>
  )
}

const RoomHeader = ({title, setIsOpen}: {title?: string, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [toolOpen, setToolOpen] = useState(false);
  const handleCloseClick = () => {
    setIsOpen(false);
  }
  const handleToolTipOpenClick = () => {
    setToolOpen(!toolOpen);
  }

  return (
    <>
      {title}
      <div>
        <ToolTips
          toolOpen={toolOpen}
          setToolOpen={setToolOpen}
          titleContent="1. Room Number은 대소문자와 숫자만 가능 합니다.
          2. Room Password는 8자리 이상 입력하셔야 합니다.">
          <ToolTipSvg onClick={handleToolTipOpenClick} />
        </ToolTips>
        <CloseSvg onClick={handleCloseClick} />
      </div>
    </>
  )
}

export default function RoomModal({isOpen, setIsOpen}: EssentialModalProps) {

  return (
    <Modal isOpen={isOpen} size="md" >
      <RoomHeader title="CREATE ROOMS" setIsOpen={setIsOpen} />
      <RoomFrom setIsOpen={setIsOpen} />
    </Modal>
  );
}