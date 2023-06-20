import Avatar from '../../components/Avatars/Avatar';
import { AuctionSettingSection, AuctionGridDiv, AuctionRowsHeader } from '../../css/AuctionSetting.styles';
import { useRecoilValue } from 'recoil';
import { memberStates } from '../../states/roomState'

interface MemberProps {
  idx: string;
  name: string;
  rating: string;
  imgSrc: File;
  guideUrl?: string;
}

interface SettingRowsProps {
  headerName: string;
  members: MemberProps[];
}

const AuctionSettingRows = (props: SettingRowsProps) => {
  return (
    <AuctionGridDiv>
      <AuctionRowsHeader>{props.headerName}</AuctionRowsHeader>
      <Avatar
        nameContent={props.members && props.members.length > 0 ? props.members[0].name : undefined}
        src={props.members && props.members.length > 0 ? props.members[0].imgSrc : undefined}
        alt={props.members && props.members.length > 0 ? props.members[0].idx : undefined}
        shape='rounded' size='md' />
      <Avatar
        nameContent={props.members && props.members.length > 1 ? props.members[1].name : undefined}
        src={props.members && props.members.length > 1 ? props.members[1].imgSrc : undefined}
        alt={props.members && props.members.length > 1 ? props.members[1].idx : undefined}
        shape='rounded' size='md' />
      <Avatar
        nameContent={props.members && props.members.length > 2 ? props.members[2].name : undefined}
        src={props.members && props.members.length > 2 ? props.members[2].imgSrc : undefined}
        alt={props.members && props.members.length > 2 ? props.members[2].idx : undefined}
        shape='rounded' size='md' />
      <Avatar
        nameContent={props.members && props.members.length > 3 ? props.members[3].name : undefined}
        src={props.members && props.members.length > 3 ? props.members[3].imgSrc : undefined}
        alt={props.members && props.members.length > 3 ? props.members[3].idx : undefined}
        shape='rounded' size='md' />
      <Avatar
        nameContent={props.members && props.members.length > 4 ? props.members[4].name : undefined}
        src={props.members && props.members.length > 4 ? props.members[4].imgSrc : undefined}
        alt={props.members && props.members.length > 4 ? props.members[4].idx : undefined}
        shape='rounded' size='md' />
    </AuctionGridDiv>
  );
}


const AuctionBottom = () => {
  const members = useRecoilValue(memberStates);

  return (
    <AuctionSettingSection position='bottom'>
      <AuctionSettingRows headerName='A Group' members={members.filter((item) => item.rating === 'A')} />
      <AuctionSettingRows headerName='B Group' members={members.filter((item) => item.rating === 'B')} />
      <AuctionSettingRows headerName='C Group' members={members.filter((item) => item.rating === 'C')} />
      <AuctionSettingRows headerName='D Group' members={members.filter((item) => item.rating === 'D')} />
      <AuctionSettingRows headerName='E Group' members={members.filter((item) => item.rating === 'E')} />
    </AuctionSettingSection>
  )
}

export default AuctionBottom;