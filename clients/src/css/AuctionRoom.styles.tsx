import styled from "styled-components";


export const AuctionRoomBtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuctionRoomGroupDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`

export const AuctionRoomSection = styled.section<{type?: string}>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid #D41E1E;
`

export const AuctionRoomFigure = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #464646;
`;


export const AuctionRoomContent = styled.div`
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #464646, #5a5a5a);
  & p {
    font-weight: 600;
    letter-spacing: 0.4rem;
    line-height: 110%;
    color: #f5f5f5;
    -webkit-text-stroke: 1px #f5f5f5; 
    text-transform: uppercase;
  }
  & p:first-child {
    font-size: 3rem;
  }
  & p:last-child {
    font-size: 8rem;
  }
`