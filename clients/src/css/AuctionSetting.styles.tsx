import styled, {css} from 'styled-components';
import { ReactComponent as ValorantSvg } from '../assets/svgs/valorant.svg'
import { ReactComponent as SettingSvg } from '../assets/svgs/settings.svg'

export const AuctionSettingCenter = styled.div`
  background-color: #323232;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

export const AuctionSettingBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1366px;
  height: 100%;
  background-color: #323232;
  border-left: 1px solid #D41E1E;
  border-right: 1px solid #D41E1E;
`;

export const AuctionSettingHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: #D41E1E;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const AuctionSettingSection = styled.section<{position: string}>`
  width: 100%;
  border-bottom: 1px solid #D41E1E;
  ${props => props.position === 'middle' && css`
    display: flex;
    justify-content: space-around;
  `}
`

export const AuctionTitleSvg = styled(ValorantSvg)`
  width: 33%;
  height: 100%;
  & > path {
    fill: #323232;
  }
`;

export const AuctionSettingSvg = styled(SettingSvg)`
  width: 48px;
  height: 48px;
  padding: 6.5px 5px;
  & path {
    fill: #323232;
  }
  &:hover {
    transform: scale(0.9);
    transition: 0.5s;
    & path {
      opacity: 0.8;
    }
  }
`;