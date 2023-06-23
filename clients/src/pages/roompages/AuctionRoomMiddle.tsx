import { AuctionRoomBtnGroup, AuctionRoomSection, AuctionRoomFigure, AuctionRoomContent } from '../../css/AuctionRoom.styles'
import Button from '../../components/Buttons/Button';
import Avatar from '../../components/Avatars/Avatar';


const AuctionRoomMiddle = () => {

  return (
    <AuctionRoomSection>
      <AuctionRoomBtnGroup>
        <Button
          name='director-btn'
          size='full'
          height='80px'
          decor='variant-gray'
          color='#f5f5f5'
        >감독 등록</Button>
        <Button
          name='director-btn'
          size='full'
          height='80px'
          decor='variant-gray'
          color='#f5f5f5'
        >경매 시작</Button>
      </AuctionRoomBtnGroup>
      <AuctionRoomSection type='image'>
        <AuctionRoomFigure>
          <Avatar nameContent='감블러' size='full' shape='rounded' alt="random-image"/>
        </AuctionRoomFigure>
        <AuctionRoomContent>
          <p>Group</p>
          <p>A</p>
        </AuctionRoomContent>
      </AuctionRoomSection>
    </AuctionRoomSection>
  );
}

export default AuctionRoomMiddle;