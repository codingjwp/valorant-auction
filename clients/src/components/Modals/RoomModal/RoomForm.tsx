import { ChangeEvent, useState, useRef, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { roomNumberStates } from '../../../states/roomState';
import { useRecoilState } from 'recoil'
import { roomPatchFetch, roomPostFetch } from "../../../custom/roomPostFetch";
import { socket } from "../../../App";
import RoomCheck from "./RoomCheck";
import Button from "../../Buttons/Button";
import InputField from "../../InputFields/InputField";

const RoomForm = ({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isCheck, setIsCheck] = useState(true);
  const [roomValue, setRoomValue] = useState("");
  const [nickName, setNickName] = useState("");
  const [_, setRooms] = useRecoilState(roomNumberStates);
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
            setRooms(res.data);
            socket.emit('create-rooms', res.data);
            // navigate(`member?rooms=${res.data}&nick=${nickName}`);
          }
          else console.error(res.data); 
        } 
        else if (submitterName === "moveRooms") {
          const res = await roomPatchFetch('rooms', roomValue, nickName);
          if (res.status === true) {
            setIsOpen(false);
            setRooms(roomValue);
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
      <RoomCheck isCheck={isCheck} onClick={handleClickChange} />
      {!isCheck && <InputField id="room-numbers" name="roomnumber" type="text" size="full" decor="red" disabled={isCheck ? true : false} placeholder="Room Number" value={roomValue} onChange={handleRoomChange} />}
      <InputField id="room-nickname" name="nickname" type="text" size="full" decor="red" placeholder="Nick Name" value={nickName} onChange={handleNickNameChange} />
      {isCheck 
      ? <Button type="submit" name="createRooms" size="full" decor="variant-red" color="white">방생성</Button>
      : <Button type="submit" name="moveRooms" size="full" decor="variant-red" color="white">방참가</Button>}
    </form>
  )
}

export default RoomForm;