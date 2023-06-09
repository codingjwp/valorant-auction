import styled, {css} from 'styled-components';
import { ReactComponent as ValorantSvg } from '../assets/svgs/valorant.svg'
import { ReactComponent as SettingSvg } from '../assets/svgs/settings.svg'

export const AuctionSettingSection = styled.section<{position?: string}>`
  width: 100%;
  ${props => props.position === 'middle' && css`
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #D41E1E;
  `}
  ${props => props.position === 'bottom' && css`
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 5px;
  `}
`

export const AuctionGridDiv = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr 1fr 1fr 1fr 1fr;
  row-gap: 5px;
  text-align: center;
`

export const AuctionRowsHeader = styled.div`
  width: 100%;
  color: #f5f5f5DD;
  background-color: #D41E1E77;
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
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