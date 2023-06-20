import styled from "styled-components";
import { ReactComponent as CloseSvg } from "../../../assets/svgs/close.svg";
import React, { RefObject } from "react";

export interface ModalSetActionProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface BtnGroupProps extends ModalSetActionProps {
  selectRef: RefObject<HTMLSelectElement>;
}

export interface HeaderProps extends ModalSetActionProps {
  modalOpen?: boolean;
  headerTitle: string
}

export const AuctionCloseeSvg = styled(CloseSvg)`
`
export const AuctionGroupUl = styled.ul`
  display: flex;
  flex-direction: row;
  color: #f5f5f5;
  & li {
    display: inline-block;
    border-radius: 15px;
    background-color: #D41E1E;
    padding: 6px 8px;
    margin: 6px 6px 2px;
  }
`