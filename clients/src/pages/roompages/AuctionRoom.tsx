import {AuctionBaseCenter, AuctionBaseDiv} from '../../css/AuctionBase.styles';
import AuctionRoomMiddle from './AuctionRoomMiddle';
import AuctionHeader from '../settingpage/AuctionHeader';
import AuctionRoomMain from './AuctionRoomMain';

const AuctionRoom = () => {
  return (
    <AuctionBaseCenter>
      <AuctionBaseDiv>
        <AuctionHeader/>
        <AuctionRoomMiddle/>
        <AuctionRoomMain />
      </AuctionBaseDiv>
    </AuctionBaseCenter>
  );
}

export default AuctionRoom;