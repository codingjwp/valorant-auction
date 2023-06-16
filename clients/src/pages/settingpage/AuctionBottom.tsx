import Avatar from '../../components/Avatars/Avatar';
import { AuctionSettingSection, AuctionGridDiv, AuctionRowsHeader } from '../../css/AuctionSetting.styles';

interface SettingRowsProps {
  headerName: string,
  members?: {
    headContent?: string;
    nameContent?: string;
    src?: string;
    alt?: string;
  }[]
}

const AuctionSettingRows = (props: SettingRowsProps) => {
  return (
    <AuctionGridDiv>
      <AuctionRowsHeader>{props.headerName}</AuctionRowsHeader>
      <Avatar nameContent='감블러' size="md"  shape='rounded' alt='test1' />
      <Avatar nameContent='버니버니' size="md" shape='rounded' alt='test2' />
      <Avatar nameContent='김된모' shape='rounded' size="md" alt='test3' />
      <Avatar nameContent='행돌' shape='rounded' size="md" alt='test4' />
      <Avatar nameContent='test' shape='rounded' size="md" alt='test5' />
    </AuctionGridDiv>
  );
}


const AuctionBottom = () => {
  return (
    <AuctionSettingSection position='bottom'>
      <AuctionSettingRows headerName='A Group' />
      <AuctionSettingRows headerName='B Group' />
      <AuctionSettingRows headerName='C Group' />
      <AuctionSettingRows headerName='D Group' />
      <AuctionSettingRows headerName='E Group' />
    </AuctionSettingSection>
  )
}

export default AuctionBottom;