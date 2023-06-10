import React, { ReactNode } from 'react'
import { ModalLayout, ModalBase, ModalHeader, ModalSection} from './Modal.styles'

interface ModalProps {
  isOpen: boolean,
  size?: "sm" | "md" | "lr";
  children?: ReactNode;
}

export default function Modal({isOpen, size = "sm", children}: ModalProps) {
  const arrayChildren = React.Children.toArray(children);

  return (
    <ModalLayout open={isOpen}>
      <ModalBase size={size}>
        <ModalHeader>
          {arrayChildren[0]}
        </ModalHeader>
        <ModalSection>
          {arrayChildren[1]}
        </ModalSection>
      </ModalBase>
    </ModalLayout>
  )
}