import { AuctionBaseCenter, AuctionBaseDiv} from '../../css/AuctionBase.styles'
import AutcionHeader from './AuctionHeader';
import AuctionMiddle from './AuctionMiddle';
import AuctionBottom from './AuctionBottom';

const AutionSetting = () => {

  return (
    <AuctionBaseCenter>
      <AuctionBaseDiv>
        <AutcionHeader />
        <AuctionMiddle />
        <AuctionBottom />
      </AuctionBaseDiv>
    </AuctionBaseCenter>
  );
};

export default AutionSetting;