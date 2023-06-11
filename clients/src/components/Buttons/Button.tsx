import { ReactNode, MouseEvent, forwardRef } from "react";
import { ButtonBase, ButtonStyleProps } from "./Button.styles";

interface ButtonProps extends ButtonStyleProps {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

 const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <ButtonBase
      ref={ref}
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
});

export default Button;