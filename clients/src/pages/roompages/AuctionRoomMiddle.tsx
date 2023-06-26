import { AuctionRoomBtnGroup, AuctionRoomSection, AuctionRoomFigure, AuctionRoomContent } from '../../css/AuctionRoom.styles'
import DirectorModal from '../../components/Modals/DirectorModal/DirectorModal';
import Button from '../../components/Buttons/Button';
import Avatar from '../../components/Avatars/Avatar';
import { useState } from 'react';


const AuctionRoomMiddle = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const directorDataSetting = () => {
    setModalOpen(!modalOpen);
  }

  const auctionStartClick = () => {

  }

  return (
    <AuctionRoomSection>
      <AuctionRoomBtnGroup>
        <Button
          name='director-btn'
          size='full'
          height='80px'
          decor='variant-gray'
          color='#f5f5f5'
          onClick={directorDataSetting}
        >감독 등록</Button>
        <Button
          name='autcion-start-btn'
          size='full'
          height='80px'
          decor='variant-gray'
          color='#f5f5f5'
          onClick={auctionStartClick}
        >경매 시작</Button>
      </AuctionRoomBtnGroup>
      <AuctionRoomSection type='image'>
        <AuctionRoomFigure>
          <Avatar nameContent='감블러' type="auction" size='full' shape='rounded' alt="auction-random-image"/>
        </AuctionRoomFigure>
        <AuctionRoomContent>
          <p>Group</p>
          <p>A</p>
        </AuctionRoomContent>
      </AuctionRoomSection>
      <DirectorModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </AuctionRoomSection>
  );
}

export default AuctionRoomMiddle;