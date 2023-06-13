import { useState, MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Buttons/Button';
import DropDown from '../components/DropDowns/DropDown';
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

interface SettingRowsProps {
  headerName: string,
  members?: {
    headContent?: string;
    nameContent?: string;
    src?: string;
    alt?: string;
  }[]
}

const AuctionSettingRows = (props: SettingRowsProps) => {
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

const AutcionHeader = () => {
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

  const handleSettingClick = () => {
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

const AuctionMiddle = () => {
  const [isAuctionOpen, setIsAuctionOpen] = useState(false);
  const [nameTarget, setNameTarget] = useState("");

  const handleClickEvent = (event: MouseEvent<HTMLButtonElement>) => {
    const targets = event.currentTarget.name.split("-")[1];
    if (targets === "direcor" || targets === "member") setIsAuctionOpen(!isAuctionOpen);
    setNameTarget(targets);
  }

  return (
    <AuctionSettingSection position='middle'>
      <Button 
        type="button"
        size="lr"
        name="auction-director"
        decor="variant-red"
        color="#f5f5f5"
        onClick={handleClickEvent}>감독 등록</Button>
      <Button 
        type="button"
        size="lr"
        name="auction-member"
        decor="variant-red"
        color="#f5f5f5"
        onClick={handleClickEvent}>멤버 등록</Button>
      <Button
        type="reset"
        size="lr"
        name="auction-reset"
        decor='variant-red'
        color="#f5f5f5">초기화</Button>
      <Button
        type="reset"
        size="lr"
        name="auction-finish"
        decor='variant-red'
        color="#f5f5f5">완료</Button>
    </AuctionSettingSection>
  );
}

const AuctionBottom = () => {
  return (
    <AuctionSettingSection position='bottom'>
      <AuctionSettingRows headerName='감독' />
      <AuctionSettingRows headerName='A Group' />
      <AuctionSettingRows headerName='B Group' />
      <AuctionSettingRows headerName='C Group' />
      <AuctionSettingRows headerName='D Group' />
      <AuctionSettingRows headerName='E Group' />
    </AuctionSettingSection>
  )
}

const AutionSetting = () => {

  return (
    <AuctionSettingCenter>
      <AuctionSettingBase>
        <AutcionHeader />
        <AuctionMiddle />
        <AuctionBottom />
      </AuctionSettingBase>
    </AuctionSettingCenter>
  );
};

export default AutionSetting;