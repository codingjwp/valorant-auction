import styled, { css } from 'styled-components'

export const ModalLayout = styled.div<{open: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${props => props.open ? 'block': 'none'};
`

export const ModalBase = styled.div<{size: string}>`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 20px;
  transform: translateX(-50%) translateY(-50%);
  background-color: #323232;
  border: 2px solid #D41E1E;
  ${props => props.size === "sm" && css`
    width: 400px;
  `};
  ${props => props.size === "md" && css`
    width: 500px;
  `};
  ${props => props.size === "lr" && css`
    width: 650px;
  `};
`

export const ModalHeader = styled.header`
  display: flex;
  flex-direction: row;
  font-size: 1.3rem;
  color: #f5f5f5;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  & > div {
    display: flex;
    flex-direction: row;
  }
  & svg {
    width: 40px;
    height: 40px;
    &:active {
      transform: scale(0.9);
      & path { fill: #f5f5f566;}
    }
  }
`

export const ModalSection = styled.section`
  
`;