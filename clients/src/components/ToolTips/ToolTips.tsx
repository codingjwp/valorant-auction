import React, { useRef, MouseEvent } from 'react';
import { ToolTipBase, ToolTipContent} from './ToolTip.styles'

interface ToolTipProps {
  toolOpen: boolean;
  setToolOpen: React.Dispatch<React.SetStateAction<boolean>>;
  titleContent?: string;
  children?: React.ReactNode;
}

export default function ToolTips({toolOpen, setToolOpen, titleContent, children}: ToolTipProps) {
  const preRef = useRef<HTMLPreElement>(null);

  const handleClickClose = (e: MouseEvent<HTMLPreElement>) => {
    if (toolOpen && preRef.current?.contains(e.currentTarget)) {
      setToolOpen(!toolOpen);
    }
  }

  return (
    <ToolTipBase>
      {children}
      <ToolTipContent ref={preRef} onClick={handleClickClose} decor="red" open={toolOpen}>
        {titleContent}
      </ToolTipContent>
    </ToolTipBase>
  );
}