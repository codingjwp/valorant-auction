import styled, { css, keyframes } from "styled-components";
import  {ReactComponent as  BulleholeSvg01} from '../assets/svgs/bulleholes01.svg';
import  {ReactComponent as  BulleholeSvg02} from '../assets/svgs/bulleholes02.svg';
import  {ReactComponent as  BulleholeSvg03} from '../assets/svgs/bulleholes03.svg';
import  {ReactComponent as  TitleSvg} from '../assets/svgs/valorant.svg';
import  {ReactComponent as  SubSvg} from '../assets/svgs/auction.svg';

interface LayoutCenterProps {
  direction?: string;
  position?: string;
  width?: string;
  height?: string;
  overflow?: string;
  cursor?: string;
}

const bgColorLeft = keyframes`
  0% { background-position: 100% 50%; background-color: #522E2E}
  100% { background-position: 0% 50%; background-color: #323232 }
`

export const LayoutCenter = styled.div<LayoutCenterProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${props => props.position};
  flex-direction: ${props => props.direction};
  width: ${props => props.width};
  height: ${props => props.height};
  overflow: ${props => props.overflow};
  animation: ${bgColorLeft} 4.2s both;
  cursor: ${props => props.cursor};

  ${props => (props.cursor === 'pointer' && css`
    &: hover {
      scale: 1.1;
    }
  `)}
`

interface AnimationProps {
  scale?: number;
  top?: string;
  left?: string;
  right?: string;
  zindex?: number;
  delay?: string;
}

const shot = keyframes`
  0% { opacity: 0; transform: scale(0) translateZ(0); }
  25% { opacity: 0.4; transform: scale(0.45) translateZ(100px);}
  50% { opacity: 0.6; transform: scale(0.6) translateZ(200px);}
  75% { opacity: 0.8; transform: scale(0.8) translateZ(300px);}
  100% { opacity: 1; transform: scale(1) translateZ(-1000px);}
`

export const AnimationBulleHoleOne = styled(BulleholeSvg01)<AnimationProps>`
  position: absolute;
  opacity: 0;
  scale: ${props => props.scale};
  z-index: ${props => props.zindex};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  animation: ${shot} 0.6s ease ${props => props.delay} forwards;
`;

export const AnimationBulleHoleTwo = styled(BulleholeSvg02)<AnimationProps>`
  position: absolute;
  opacity: 0;
  scale: ${props => props.scale};
  z-index: ${props => props.zindex};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  animation: ${shot} 0.6s ease ${props => props.delay} forwards;
`;
export const AnimationBulleHoleThree = styled(BulleholeSvg03)<AnimationProps>`
  position: absolute;
  opacity: 0;
  scale: ${props => props.scale};
  z-index: ${props => props.zindex};
  top: ${props => props.top};
  left: ${props => props.left};
  right: ${props => props.right};
  animation: ${shot} 0.6s ease ${props => props.delay} forwards;
`;

const titleAni = keyframes`
  0% { opacity: 1; transform: scale(1.3) translateX(-300px)}
  25% { opacity: 1; transform: scale(1.3) translateX(-100px)}
  50% { opacity: 1; transform: scale(1.3) translateX(0)}
  75% { opacity: 1; transform: scale(1.3) }
  85% { opacity: 1; transform: scale(1.15) }
  100% { opacity: 1; transform: scale(1) }
`;

const subAni = keyframes`
  0% { opacity: 1; transform: scale(1.3) translateX(300px)}
  25% { opacity: 1; transform: scale(1.3) translateX(100px)}
  50% { opacity: 1; transform: scale(1.3) translateX(0)}
  75% { opacity: 1; transform: scale(1.3) }
  85% { opacity: 1; transform: scale(1.15) }
  100% { opacity: 1; transform: scale(1) }
`;

export const AnimationTitle = styled(TitleSvg)<{scale?: number, margin?: string, zindex?: number}>`
  opacity: 0;
  position: relative;
  scale: ${props => props.scale};
  margin: ${props => props.margin};
  z-index: ${props => props.zindex};
  animation: ${titleAni} 0.6s ease-in forwards;
`;
export const AnimationSubHead = styled(SubSvg)<{scale?: number, margin?: string, zindex?: number}>`
  /* opacity: 0; */
  position: relative;
  scale: ${props => props.scale};
  margin: ${props => props.margin};
  z-index: ${props => props.zindex};
  animation: ${subAni} 0.6s ease-in forwards;
`;

