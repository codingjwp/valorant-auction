import Button from '../../Buttons/Button';
import { ModalSetActionProps } from './AuctionModal.styles'
import { useRecoilValue } from 'recoil'
import { memberStates } from '../../../states/roomState';

const AuctionModalBntGroup = ({setModalOpen}: ModalSetActionProps) => {
  const memberData = useRecoilValue(memberStates);
  return (
    <div>
      <Button 
        type="button"
        size="half"
        name="member-register"
        decor="variant-red"
        color="#f5f5f5"
        >등록</Button>
      <Button 
        type="button"
        size="half"
        name="member-closer"
        decor="variant-red"
        color="#f5f5f5"
        onClick={() => {
          console.log(memberData);
          setModalOpen(false)
        }}>닫기</Button>
    </div>
  );
}

export default AuctionModalBntGroup;