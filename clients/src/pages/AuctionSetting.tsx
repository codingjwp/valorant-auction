import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { userStream } from '../custom/MediaList';
import Button from '../components/Buttons/Button';
import DropDown from '../components/DropDown/DropDown';
import { 
  AuctionSettingCenter,
  AuctionSettingBase,
  AuctionSettingHeader,
  AuctionTitleSvg,
  AuctionSettingSvg,
  AuctionSettingSection,
  AuctionGridDiv,
  AuctionRowsHeader,
  AuctionSettingNull } from '../css/AuctionSetting.styles';
import MediaModal from '../components/Modals/MediaModal';
import Avatar from '../components/Avatars/Avatar';

function AutcionHeader() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menus = [
    {
      idx: "menu-01",
      name: "미디어 설정",
      onClick: handleMediaClick,
    },
    {
      idx: "menu-02",
      name: "Room 나가기",
      onClick: handleExitClick,
    }
  ];

  function handleMediaClick() {
    setIsOpen(false);
    setIsModalOpen(!isModalOpen);
  }

  function handleExitClick() {
    setIsOpen(false);
    navigate('/');
  }

  function handleSettingClick() {
    setIsOpen(!isOpen);
  }

  return (
    <AuctionSettingHeader>
      <AuctionTitleSvg />
      <DropDown isOpen={isOpen} menus={menus}>
        <AuctionSettingSvg onClick={handleSettingClick} />
      </DropDown>
      <MediaModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></MediaModal>
    </AuctionSettingHeader>
  );
}

interface SettingRowsProps {
  headerName: string,
  members?: {
    headContent?: string;
    nameContent?: string;
    src?: string;
    alt?: string;
  }[]
}

function AuctionSettingRows(props: SettingRowsProps) {
  return (
    <AuctionGridDiv>
      <AuctionRowsHeader>{props.headerName}</AuctionRowsHeader>
      <Avatar nameContent='감블러' size="md"  shape='rounded' alt='test1' />
      <Avatar nameContent='버니버니' size="md" shape='rounded' alt='test2' />
      <Avatar nameContent='김된모' shape='rounded' size="md" alt='test3' />
      <Avatar nameContent='행돌' shape='rounded' size="md" alt='test4' />
      {props.headerName === "감독" ? <AuctionSettingNull></AuctionSettingNull> : <Avatar nameContent='test' shape='rounded' size="md" alt='test5' />}
    </AuctionGridDiv>
  );
}

export default function AutionSetting() {

  useEffect(() => {
    if (!localStorage.getItem("audioList") && !localStorage.getItem("videoList")) userStream();
  }, []);

  return (
  <AuctionSettingCenter>
    <AuctionSettingBase>
      <AutcionHeader />
      <AuctionSettingSection position='middle'>
        <Button
          type="reset"
          size="lr"
          name="auction-reset"
          decor='variant-red'
          color="#f5f5f5">
          초기화
        </Button>
        <Button 
          type="button"
          size="lr"
          name="auction-member"
          decor="variant-red"
          color="#f5f5f5">감독 등록</Button>
        <Button 
          type="button"
          size="lr"
          name="auction-member"
          decor="variant-red"
          color="#f5f5f5">멤버 등록</Button>
      </AuctionSettingSection>
      <AuctionSettingSection position='bottom'>
        <AuctionSettingRows headerName='감독' />
        <AuctionSettingRows headerName='A Group' />
        <AuctionSettingRows headerName='B Group' />
        <AuctionSettingRows headerName='C Group' />
        <AuctionSettingRows headerName='D Group' />
        <AuctionSettingRows headerName='E Group' />
      </AuctionSettingSection>
    </AuctionSettingBase>
  </AuctionSettingCenter>);
}