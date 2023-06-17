import { AuctionCloseeSvg, HeaderProps } from "./AuctionModal.styles";

const AuctionModalHeader = ({headerTitle, setModalOpen}: HeaderProps) => {

  return (
    <>
      {headerTitle}
      <AuctionCloseeSvg onClick={() => setModalOpen(false)}/>
    </>
  )
}

export default AuctionModalHeader;