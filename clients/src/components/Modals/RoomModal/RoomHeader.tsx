import { useState } from 'react';
import { ReactComponent as CloseSvg } from '../../../assets/svgs/close.svg'
import { ReactComponent as ToolTipSvg } from '../../../assets/svgs/tooltip.svg'
import ToolTips from "../../ToolTips/ToolTips";

const RoomHeader = ({title, setIsOpen}: {title?: string, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [toolOpen, setToolOpen] = useState(false);
  const handleCloseClick = () => {
    setIsOpen(false);
    const form = document.querySelector("form");
    (form as HTMLFormElement).reset();
  }
  const handleToolTipOpenClick = () => {
    setToolOpen(!toolOpen);
  }

  return (
    <>
      {title}
      <div>
        <ToolTips
          toolOpen={toolOpen}
          setToolOpen={setToolOpen}
          moveposition={{x: "-134px", y: "-89px"}}
          titleContent="1. Room Number은 대소문자와 숫자, 한글만 가능 합니다.
          2. Nick Name은 대소문자와 숫자, 한글만 가능 합니다.">
          <ToolTipSvg onClick={handleToolTipOpenClick} />
        </ToolTips>
        <CloseSvg onClick={handleCloseClick} />
      </div>
    </>
  )
}

export default RoomHeader;