import { useState, MouseEvent} from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Buttons/Button';
import { AuctionSettingSection } from '../../css/AuctionSetting.styles';
import AuctionModal from '../../components/Modals/AuctionModal/AuctionModal';
import { filePostFetch } from '../../custom/roomPostFetch'
import { useRecoilState, useRecoilValue } from 'recoil';
import { memberStates, roomStates } from '../../states/roomState'

const AuctionMiddle = () => {
  const navigate = useNavigate();
  const [isAuctionOpen, setIsAuctionOpen] = useState(false);
  const roomData = useRecoilValue(roomStates);
  const [member, setMember] = useRecoilState(memberStates);

  const handleClickEvent = (event: MouseEvent<HTMLButtonElement>) => {
    const targets = event.currentTarget.name.split("-")[1];
    if (targets === "member") setIsAuctionOpen(!isAuctionOpen);
  }

  const handleFilePost = async () => {
    if (!roomData) return ;
    try {
      await Promise.all(member.map((item) => {
        filePostFetch({
          url: 'rooms/fileupload', 
          roomNumber: roomData.roomNumber, 
          nick: roomData.nick, 
          files: item
        })
      }));
      setMember([]);
      navigate(`/auction?rooms=${roomData.roomNumber}&nick=${roomData.nick}`);
    } catch (err: any) {
      console.error(err.message);
    }
  }

  return (
    <AuctionSettingSection position='middle'>
      <Button
        type="reset"
        size="lr"
        name="auction-reset"
        decor='variant-red'
        color="#f5f5f5"
        onClick={() => setMember([])}>초기화</Button>
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
        color="#f5f5f5"
        disabled={member.length === 25 ? false : true}
        onClick={handleFilePost}>완료</Button>
        <AuctionModal headerTitle="Auction Member Registration" modalOpen={isAuctionOpen} setModalOpen={setIsAuctionOpen} />
    </AuctionSettingSection>
  );
}

export default AuctionMiddle