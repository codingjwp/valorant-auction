import { AuctionSettingCenter, AuctionSettingBase } from '../../css/AuctionSetting.styles';
import AutcionHeader from './AuctionHeader';
import AuctionMiddle from './AuctionMiddle';
import AuctionBottom from './AuctionBottom';

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