import styled from "styled-components";
import { ReactComponent as CloseSvg } from "../../../assets/svgs/close.svg";

export interface ModalSetActionProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export interface HeaderProps extends ModalSetActionProps {
  modalOpen?: boolean;
  headerTitle: string
}

export const AuctionCloseeSvg = styled(CloseSvg)`
`