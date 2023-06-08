import { ReactNode, MouseEvent} from "react";
import { ButtonBase, ButtonStyleProps } from "./Button.styles";

interface ButtonProps extends ButtonStyleProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <ButtonBase
      type={props.type}
      name={props.name}
      disabled={props.disabled}
      size={props.size}
      width={props.width}
      height={props.height}
      decor={props.decor}
      color={props.color}
      onClick={props.onClick}>
        {props.children}
    </ButtonBase>
  ) 
}