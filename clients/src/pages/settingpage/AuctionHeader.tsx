import { useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuctionTitleSvg, AuctionSettingSvg } from '../../css/AuctionSetting.styles'
import { AuctionBaseHeader} from '../../css/AuctionBase.styles'
import { useRecoilValue } from 'recoil';
import { roomStates } from '../../states/roomState'
import { toast, Toaster } from 'react-hot-toast'
import DropDown from "../../components/DropDowns/DropDown";
import MediaModal from '../../components/Modals/MediaModal';

const AutcionHeader = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const roomData = useRecoilValue(roomStates);
  const menus = [
    {
      idx: "menu-01",
      name: "미디어 설정",
      onClick: handleDropDownClick,
    },
    {
      idx: "menu-02",
      name: "RoomNumber 복사",
      onClick: handleDropDownClick,
    },
    {
      idx: "menu-03",
      name: "Room 나가기",
      onClick: handleDropDownClick,
    }
  ];

  const handleChilpBoardCopy = async () => {
    try {
      if (!roomData) return ;
      await navigator.clipboard.writeText(roomData.roomNumber);
      toast.success("클립보드에 복사를 성공하였습니다.", {
        duration: 2000,
        position: 'top-right',
        style: {
          background: '#323232',
          color: '#f5f5f5',
          border: '2px solid #D41E1E'
        }
      });
    } catch(err: any) {;
      toast.error("클립보드에 복사를 실패하였습니다.", {
        duration: 2000,
        position: 'top-right',
        style: {
          background: '#b11919',
          color: '#f5f5f5',
          border: '2px solid #323232'
        }
      });
    }
    
  }

  function handleDropDownClick(event: MouseEvent<HTMLLIElement>) {
    setIsOpen(false);
    const dropTitle = event.currentTarget.title;
    switch (dropTitle) {
      case 'menu-01' :
        setIsModalOpen(!isModalOpen);
        break;
      case 'menu-02' :
        handleChilpBoardCopy();
        break;
      case 'menu-03' :
        navigate('/');
        break;
    }    
  }

  return (
    <AuctionBaseHeader>
      <AuctionTitleSvg />
      <DropDown isOpen={isOpen} menus={menus}>
        <AuctionSettingSvg onClick={() => setIsOpen(!isOpen)} />
      </DropDown>
      <MediaModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <Toaster />
    </AuctionBaseHeader>
  );
}

export default AutcionHeader;