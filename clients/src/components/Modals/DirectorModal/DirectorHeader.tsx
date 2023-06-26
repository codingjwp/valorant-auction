import { ReactComponent as CloseSvg } from '../../../assets/svgs/close.svg'

interface DirectorHeaderProps {
  haderTitle?: string;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DirectorHeader = (props: DirectorHeaderProps) => {
  return (
    <>
      {props.haderTitle}
      <CloseSvg onClick={() => props.setModalOpen(false)} />
    </>
  )
}

export default DirectorHeader;