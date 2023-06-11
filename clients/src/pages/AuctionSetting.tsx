import Button from '../components/Buttons/Button';
import { AuctionSettingCenter, AuctionSettingBase, AuctionSettingHeader, AuctionTitleSvg, AuctionSettingSvg, AuctionSettingSection } from '../css/AuctionSetting.styles';

export default function AutionSetting() {
  return (
  <AuctionSettingCenter>
    <AuctionSettingBase>
      <AuctionSettingHeader>
        <AuctionTitleSvg />
        <AuctionSettingSvg />
      </AuctionSettingHeader>
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
      aution setting
    </AuctionSettingBase>
  </AuctionSettingCenter>);
}