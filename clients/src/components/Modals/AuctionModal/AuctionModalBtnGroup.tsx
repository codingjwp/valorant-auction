import { useEffect, useState } from 'react';
import Button from '../../Buttons/Button';
import { BtnGroupProps } from './AuctionModal.styles'
import { useRecoilState } from 'recoil';
import { memberStates } from '../../../states/roomState'


const AuctionModalBtnGroup = (props: BtnGroupProps) => {
  const [member, setMember] = useRecoilState(memberStates);
  const [memberLength, setMemberLength] = useState(0);

  const handleResetClick = () => {
    setMember(member.filter((itme) => itme.rating !== props.selectRef.current?.value));
  }

  const handleCompleteClick = () => {
  }

  useEffect(() => {
    setMemberLength(member.length);
  }, [member])

  return (
    <div>
      <Button 
        type="button"
        size="half"
        name="member-register"
        decor="variant-red"
        color="#f5f5f5"
        disabled={memberLength === 25 ? false : true}
        onClick={handleCompleteClick}
        >"저장"</Button>
      <Button 
        type="button"
        size="half"
        name="member-reset"
        decor="variant-red"
        color="#f5f5f5"
        onClick={handleResetClick}>그룹 별 리셋</Button>
    </div>
  );
}

export default AuctionModalBtnGroup;