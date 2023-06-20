import styled, { keyframes, css } from "styled-components";
import { ReactComponent as FileImgSvg } from '../../assets/svgs/fileimg.svg'

export interface FileUploadProps {
  data?: string,
  baseContnet?: string,
}

const reload = keyframes`
  0% {opacity: 1; width: 646px;}
  13% {opacity: 1; width: calc(650px - 110px);}
  25% {opacity: 1; width: calc(650px - 220px);}
  37% {opacity: 1; width: calc(650px - 320px);}
  59% {opacity: 1; width: calc(650px - 420px);}
  71% {opacity: 1; width: calc(650px - 520px);}
  83% {opacity: 1; width: calc(650px - 620px);}
  100% {width: 0px;}
`

export const FileImgSvgs= styled(FileImgSvg)`
  width: 60px;
  height: 60px;
  & path {
    fill: #323232;
  }
`;

export const FileUploadBase = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 2px dashed #D41E1E;
  margin: 10px 0 10px 0;
  background-color: #323232;
  color: #f5f5f5;
  -webkit-user-select: none;
  user-select: none;
`;

export const FileImgBase = styled.div<{load: string}>`
  position: relative;
  color: #f5f5f5;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #D41E1E;
  margin: 10px 0 10px 0;
  & span {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0;
    border: 2px solid #27caf3;
    opacity: 0;
    ${props => props.load !== 'T' && css`
      animation: ${reload} 5s ease-in
    `}
  }
`;