import React, { ReactNode } from 'react'
import { ModalLayout, ModalBase, ModalHeader, ModalSection} from './Modal.styles'
import { ReactComponent as CloseSvg } from '../../assets/svgs/close.svg'

export interface EssentialModalProps {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

interface ModalProps extends EssentialModalProps {
  size?: "sm" | "md" | "lr";
  title?: string;
  children?: ReactNode,
}

export default function Modal({isOpen, setIsOpen, title, size = "sm", children}: ModalProps) {
  const handleCloseClick = () => {
    setIsOpen(false);
  }

  return (
    <ModalLayout open={isOpen}>
      <ModalBase size={size}>
        <ModalHeader>
            {title}
            <CloseSvg onClick={handleCloseClick}/>
        </ModalHeader>
        <ModalSection>
          {children}
        </ModalSection>
      </ModalBase>
    </ModalLayout>
  )
}