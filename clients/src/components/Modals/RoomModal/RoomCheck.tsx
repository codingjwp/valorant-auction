import styled from "styled-components";
import { MouseEvent } from "react";

const RoomFormLi = styled.li<{ischecked?: string }>`
  display: inline-block;
  border-radius: 15px;
  padding: 5px;
  margin-left: 5px;
  -webkit-user-select: none;
  user-select: none;
  border: 0;
  background-color: #D41E1E;
  background-color: ${props => props.ischecked === 'true' && '#D41E1E77'};
`

interface RoomCheckProps {
  isCheck: boolean;
  onClick: (e: MouseEvent<HTMLLIElement>) => void;
}

const RoomCheck = (props: RoomCheckProps) => {
  return (
    <ul>
      <RoomFormLi ischecked={`${props.isCheck}`} onClick={props.onClick}>생성</RoomFormLi>
      <RoomFormLi ischecked={`${!props.isCheck}`} onClick={props.onClick}>참가</RoomFormLi>
    </ul>
  )
}

export default RoomCheck;