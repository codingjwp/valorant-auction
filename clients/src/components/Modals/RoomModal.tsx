import { ChangeEvent, useState, useRef, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CloseSvg } from '../../assets/svgs/close.svg'
import { ReactComponent as ToolTipSvg } from '../../assets/svgs/tooltip.svg'
import { roomPatchFetch, roomPostFetch } from "../../custom/roomPostFetch";
import styled from "styled-components";
import Button from "../Buttons/Button";
import InputField from "../InputFields/InputField";
import Modal from "./Modal";
import ToolTips from "../ToolTips/ToolTips";

interface EssentialModalProps {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const RoomFormLi = styled.li<{ischecked?: string }>`
  display: inline-block;
  border-radius: 15px;
  padding: 5px;
  margin-left: 5px;
  -webkit-user-select: none;
  user-select: none;
  border: 0;
  background-color: #D41E1E;
  background-color: ${props => props.ischecked === 'true' && '#D41E1E77'};
`

const RoomFrom = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isCheck, setIsCheck] = useState(true);
  const [roomValue, setRoomValue] = useState("");
  const [nickName, setNickName] = useState("");
  const navigate = useNavigate();

   const handleFormSumbit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      if (formRef.current) {
        const submitterName = formRef.current.submitter
          ? (formRef.current.elements[formRef.current.submitter.name] as HTMLButtonElement).name
          : (document.activeElement as HTMLButtonElement).name;

        if (submitterName === "createRooms") {
          const res = await roomPostFetch('rooms', nickName);
          if (res.status === true) {
            setIsOpen(false);
            navigate(`member?rooms=${res.data}&nick=${nickName}`);
          }
          else console.error(res.data); 
        } 
        else if (submitterName === "moveRooms") {
          const res = await roomPatchFetch('rooms', roomValue, nickName);
          if (res.status === true) {
            setIsOpen(false);
            navigate(`auction?rooms=${roomValue}&nick=${nickName}`);
          } 
          else console.error(res.data);
        }
      }
  } 

  const handleRoomChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRoomValue(e.target.value.replace(/[^a-zA-Z0-9\u1100-\u11FF\u3130-\u318F\uAC00-\uD7AF]/g, ''));
  }

  const handleNickNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNickName(e.target.value.replace(/[^a-zA-Z0-9\u1100-\u11FF\u3130-\u318F\uAC00-\uD7AF]/g, ''));
  }

  const handleClickChange =() => {
    setIsCheck(!isCheck);
  }

  useEffect(() => {
    if (!isOpen) {
      setRoomValue("");
      setNickName("");
    }
  }, [isOpen])

  return (
    <form onSubmit={handleFormSumbit} ref={formRef}>
      <ul>
        <RoomFormLi ischecked={`${isCheck}`} onClick={handleClickChange}>생성</RoomFormLi>
        <RoomFormLi ischecked={`${!isCheck}`} onClick={handleClickChange}>참가</RoomFormLi>
      </ul>
      {!isCheck && <InputField id="room-numbers" name="roomnumber" type="text" size="full" decor="red" disabled={isCheck ? true : false} placeholder="Room Number" value={roomValue} onChange={handleRoomChange} />}
      <InputField id="room-nickname" name="nickname" type="text" size="full" decor="red" placeholder="Nick Name" value={nickName} onChange={handleNickNameChange} />
      {isCheck 
      ? <Button type="submit" name="createRooms" size="full" decor="variant-red" color="white">방생성</Button>
      : <Button type="submit" name="moveRooms" size="full" decor="variant-red" color="white">방참가</Button>}
    </form>
  )
}

const RoomHeader = ({title, setIsOpen}: {title?: string, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [toolOpen, setToolOpen] = useState(false);
  const handleCloseClick = () => {
    setIsOpen(false);
    const form = document.querySelector("form");
    (form as HTMLFormElement).reset();
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
          moveposition={{x: "-134px", y: "-89px"}}
          titleContent="1. Room Number은 대소문자와 숫자, 한글만 가능 합니다.
          2. Nick Name은 대소문자와 숫자, 한글만 가능 합니다.">
          <ToolTipSvg onClick={handleToolTipOpenClick} />
        </ToolTips>
        <CloseSvg onClick={handleCloseClick} />
      </div>
    </>
  )
}

const RoomModal = ({isOpen, setIsOpen}: EssentialModalProps) => {

  return (
    <Modal isOpen={isOpen} size="md" >
      <RoomHeader title="ROOM INFORMATION" setIsOpen={setIsOpen} />
      <RoomFrom isOpen={isOpen} setIsOpen={setIsOpen} />
    </Modal>
  );
}
export default RoomModal;