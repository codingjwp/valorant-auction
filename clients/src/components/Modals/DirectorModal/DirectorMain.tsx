import React, { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import { DirectorMainBase, DirectorSettingHeader, DirectorSettingGrid } from './DirectorModal.styles'
import { socket } from '../../../App'
import { useRecoilValue, useRecoilState } from 'recoil'
import { roomStates, directorStates, DirectorProps } from '../../../states/roomState'
import InputField from "../../InputFields/InputField";
import Button from "../../Buttons/Button";
import FileButton from "../../Buttons/FileButton/FileButton";
import Avatar from "../../Avatars/Avatar";


interface DirectorMainProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface PointerPorps {
  idx: string,
  point: string,
}

const DirectorSetting = (
  {diretors, point, setPoint} 
  : {diretors: DirectorProps[], point: PointerPorps[], setPoint: React.Dispatch<SetStateAction<PointerPorps[]>>}) => {

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
     e.target.value = (parseInt(e.currentTarget.value) > parseInt("1000") ? e.currentTarget.value.slice(0, e.currentTarget.value.length - 1) : e.currentTarget.value);
     const result = e.target.id.split('-input')[0];
     setPoint([...(point.filter((item) => item.idx != result)), {
      idx: result,
      point: e.currentTarget.value
     }])
     e.target.id.split('-input')[0];
  }

  return (
    <DirectorMainBase>
      <DirectorSettingHeader>
        <span>감독</span>
        <span>포인트</span>
        <span>이미지 등록</span>
      </DirectorSettingHeader>
      {diretors.map((member) => {
        return (
          <DirectorSettingGrid key={member.idx}>
            <Avatar shape="rounded" size="sm" nameContent={member.nick} src={member.imgSrc} alt={member.nick} />
            <InputField type="number" size="md" decor="red" min={0} max={1000} placeholder="" id={`${member.idx}-input`} name={`${member.idx}-input-name`} title={`${member.idx}-input-title`} onChange={handleChangeValue} />
            <FileButton idx={member.idx} size="sm" multiple={false} name={member.idx} />
          </DirectorSettingGrid>
        )
      })}
    </DirectorMainBase>
  )
}

const DirectorMain = (props: DirectorMainProps) => {
  const [diretors, setDirectors] = useRecoilState(directorStates);
  const [point, setPoint] = useState<PointerPorps[]>([]);
  const roomData = useRecoilValue(roomStates);

  const handleDirectorAdd = () => {
    props.setModalOpen(false);
  }

  const handleCloseClick = () => {
    props.setModalOpen(false)
  }

  useEffect(() => {
    if (props.modalOpen) {
      socket.on('director-list', (lists: DirectorProps[]) => {
        setDirectors(lists);
      })
      if (roomData) {
        socket.emit('director-list', {
          roomNumber: roomData?.roomNumber,
          nick: roomData?.nick,
        });
      }

    } else {
      socket.off('diretor-list');
    }
    return () => {
      socket.off('diretor-list');
    }
  }, [props.modalOpen])

  return (
    <DirectorMainBase>
      <DirectorSetting point={point} diretors={diretors} setPoint={setPoint} />
      <div>
        <Button 
          type="button"
          size="half"
          name="member-reset"
          decor="variant-red"
          color="#f5f5f5"
          onClick={handleDirectorAdd}>등 록</Button>
        <Button 
          type="button"
          size="half"
          name="member-register"
          decor="variant-red"
          color="#f5f5f5"
          onClick={handleCloseClick}
          >닫 기</Button>
      </div>
    </DirectorMainBase>
  )
}

export default DirectorMain;