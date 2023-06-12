import styled, { css } from 'styled-components'

interface ButtonAttrsProps {
  type?: "submit" | "button" | "reset";
  name?: string;
  disabled?: boolean;
}

// width과 height size가 undefinde 일때
export interface ButtonStyleProps extends ButtonAttrsProps {
  width?:  string;
  height?: string;
  color?: string;
  size?: "sm" | "md" | "lr" | "half" | "full";
  decor?: "outline-dark" | "outline-white" | "outline-green" | "outline-red" | "outline-yellow" | "outline-gray" | "outline-blue" |
  "variant-dark" | "variant-white" | "variant-green" | "variant-red" | "variant-yellow" | "variant-gray" | "variant-blue";
}

const bgColors = {
  "outline-dark": css`
    border-radius: 6px;
    border: 2px solid #323232;
    background-color: transparent;
  `,
  "outline-white": css`
    border-radius: 6px;
    border: 2px solid #f5f5f5;
    background-color: transparent;
  `,
  "outline-green": css`
    border-radius: 6px;
    border: 2px solid #4CAF50;
    background-color: transparent;
  `,
  "outline-red": css`
    border-radius: 6px;
    border: 2px solid #D41E1E;
    background-color: transparent;
  `,
  "outline-yellow": css`
    border-radius: 6px;
    border: 2px solid #ffbd03;
    background-color: transparent;
  `,
  "outline-gray": css`
    border-radius: 6px;
    border: 2px solid #6b6e70;
    background-color: transparent;
  `,
  "outline-blue": css`
    border-radius: 6px;
    border: 2px solid #008CBA;
    background-color: transparent;
  `,
  "variant-dark": css`
    border-radius: 6px;
    border: 0;
    background-color: #323232;
  `,
  "variant-white": css`
    border-radius: 6px;
    border: 0;
    background-color: #f5f5f5;
  `,
  "variant-green": css`
    border-radius: 6px;
    border: 0;
    background-color: #4CAF50;
  `,
  "variant-red": css`
    border-radius: 6px;
    border: 0;
    background-color: #D41E1E;
  `,
  "variant-yellow": css`
    border-radius: 6px;
    border: 0;
    background-color: #ffbd03;
  `,
  "variant-gray": css`
    border-radius: 6px;
    border: 0;
    background-color: #6b6e70;
  `,
  "variant-blue": css`
    border-radius: 6px;
    border: 0;
    background-color: #008CBA;
  `
}
const btnSizes = {
  "sm" : css`
    font-size: 1rem;
    margin: 10px;
    width: 100px;
    height: 40px;
  `,
  "md" : css`
    font-size: 1.1rem;
    margin: 10px;
    width: 200px;
    height: 45px;
  `,
  "lr" : css`
    font-size: 1.15rem;
    margin: 10px;
    width: 300px;
    height: 50px;
  `,
  "half" : css`
    margin: 10px;
    font-size: 1.15rem;
    width: calc(50% - 20px);
    height: 50px;
  `,
  "full" : css`
    margin: 10px;
    font-size: 1.15rem;
    width: calc(100% - 20px);
    height: 50px;
  `,
}

export const ButtonBase = styled.button.attrs<ButtonAttrsProps>(props =>(
  {
    type: props.type || "submit",
    name: props.name,
    disabled: props.disabled || false,
  }
))<ButtonStyleProps>`
  color: ${props=> props.color || "black"};
  ${props => props.decor && bgColors[props.decor]};
  ${props => props.size && btnSizes[props.size]};
  &:disabled {
    opacity: 0.3;
  }
  &:not(:disabled):hover {
    opacity: 0.8;
  }
`;