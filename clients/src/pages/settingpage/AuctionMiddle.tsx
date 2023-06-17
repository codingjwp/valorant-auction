import { useState, MouseEvent} from 'react'
import Button from '../../components/Buttons/Button';
import { AuctionSettingSection } from '../../css/AuctionSetting.styles';
import AuctionModal from '../../components/Modals/AuctionModal/AuctionModal';

const AuctionMiddle = () => {
  const [isAuctionOpen, setIsAuctionOpen] = useState(false);

  const handleClickEvent = (event: MouseEvent<HTMLButtonElement>) => {
    const targets = event.currentTarget.name.split("-")[1];
    if (targets === "member") setIsAuctionOpen(!isAuctionOpen);
  }

  return (
    <AuctionSettingSection position='middle'>
      <Button
        type="reset"
        size="lr"
        name="auction-reset"
        decor='variant-red'
        color="#f5f5f5">초기화</Button>
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
        name="auction-finish"
        decor='variant-red'
        color="#f5f5f5">완료</Button>
        <AuctionModal headerTitle="Auction Member Registration" modalOpen={isAuctionOpen} setModalOpen={setIsAuctionOpen} />
    </AuctionSettingSection>
  );
}

export default AuctionMiddle