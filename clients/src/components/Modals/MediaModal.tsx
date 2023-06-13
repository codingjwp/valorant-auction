import React, { useRef, useState } from "react";
import Modal from "./Modal";
import { ReactComponent as CloseSvg } from '../../assets/svgs/close.svg'
import Button from "../Buttons/Button";
import Select from "../Selects/Select";
import { changeStream } from "../../custom/MediaList";
import { useRecoilValue } from 'recoil';
import { audioListState, videoListState } from '../../states/mediaState'


const MediaHeader = ({title, setIsModalOpen}: {title?: string, setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const handleCloseClick = () => { setIsModalOpen(false);}

  return (
    <>
      {title}
      <CloseSvg onClick={handleCloseClick} />
    </>
  )
}

const MediaSection = ({setIsModalOpen}: {setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;}) => {
  const audioList = useRecoilValue(audioListState);
  const vedioList  = useRecoilValue(videoListState);
  const audioRef = useRef<HTMLSelectElement>(null);
  const vedioRef = useRef<HTMLSelectElement>(null);
  const [audioID, setAudioID] = useState<string | null>(null);
  const [vedioID, setVedioID] = useState<string | null>(null);

  const handleMediaClose = () => {
    setIsModalOpen(false);
  }

  const handleMediaSetting = () => {
    setAudioID((audioRef.current as HTMLSelectElement).value || null);
    setVedioID((vedioRef.current as HTMLSelectElement).value || null);
    changeStream({
      audios: (audioRef.current as HTMLSelectElement).value, 
      videos: (vedioRef.current as HTMLSelectElement).value
    });
    setIsModalOpen(false);
  }

  return (
    <div>
      <Select ref={audioRef} seletId={audioID} title="select-audio" sizes="full" optionlist={audioList}/>
      <Select ref={vedioRef} seletId={vedioID} title="select-vedio" sizes="full" optionlist={vedioList}/>
      <div>
        <Button
          type="button"
          name="media-setting"
          decor="variant-red"
          color="#f5f5f5"
          size="half"
          onClick={handleMediaSetting}
          >설정</Button>
        <Button
          type="button"
          name="media-cancel"
          decor="variant-red"
          color="#f5f5f5"
          size="half"
          onClick={handleMediaClose}
          >닫기</Button>
      </div>
    </div>
  )
}

interface MediaModal {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MediaModal = ({isModalOpen, setIsModalOpen}: MediaModal) => {
  return (
    <Modal isOpen={isModalOpen} size="md">
      <MediaHeader title="Media Setting" setIsModalOpen={setIsModalOpen} />
      <MediaSection setIsModalOpen={setIsModalOpen} />
    </Modal>
  )
}

export default MediaModal;