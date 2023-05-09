import styled, { css, keyframes } from "styled-components";

/* background: linear-gradient(to bottom, #0b3d91, #000000); */
const LoadingMain = styled.div`
  height: 100vh;
  background: linear-gradient(to bottom, #ffffff, #f3f3f3);
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoadingContainer = styled.div`
  height: 40%;
  min-width: 500px;
  max-height: 300px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
  font-style: italic;
  
  & > span {
    font-size: 3.5rem;
    margin-bottom: 17px;
  }
`

interface CircleProps {
  listIndex: number
}

const circleStyle = [
  css`
    width: 10px;
    height: 10px;
  `,
  css`
    width: 15px;
    height: 15px;
  `,
  css`
    width: 17px;
    height: 17px;
  `,
  css`
    width: 19px;
    height: 19px;
  `,
  css`
    width: 21px;
    height: 21px;
  `,
  css`
    width: 24px;
    height: 24px;
  `,
  css`
    width: 27px;
    height: 27px;
  `,
  css`
    width: 32px;
    height: 32px;
  `
];

const LoadingCircleGroups = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-left: 20px;
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const LoadingCircle = styled.div<CircleProps>`
  margin: 5px 5px 0 5px;
  ${props => circleStyle[props.listIndex]};
  border-radius: 50%;
  background-color: black;
  animation: ${fadeIn} 3.8s linear infinite;
  &:nth-child(1){ animation-delay: 0s;}
  &:nth-child(2){ animation-delay: .5s;}
  &:nth-child(3){ animation-delay: 1s;}
  &:nth-child(4){ animation-delay: 1.5s;}
  &:nth-child(5){ animation-delay: 2s;}
  &:nth-child(6){ animation-delay: 2.5s;}
  &:nth-child(7){ animation-delay: 3s;}
  &:nth-child(8){ animation-delay: 3.5s;}

`


const Loading = () => {
  return (
    <LoadingMain>
      <LoadingContainer>
        <span>N</span>ow Loading
        <LoadingCircleGroups>
          <LoadingCircle listIndex={0}></LoadingCircle>
          <LoadingCircle listIndex={1}></LoadingCircle>
          <LoadingCircle listIndex={2}></LoadingCircle>
          <LoadingCircle listIndex={3}></LoadingCircle>
          <LoadingCircle listIndex={4}></LoadingCircle>
          <LoadingCircle listIndex={5}></LoadingCircle>
          <LoadingCircle listIndex={6}></LoadingCircle>
          <LoadingCircle listIndex={7}></LoadingCircle>
        </LoadingCircleGroups>
      </LoadingContainer>
    </LoadingMain>
  )
}

export default Loading;