import styled, { css } from "styled-components";

const bgColor = {
  "dark": css`
    background-color: #323232;
    color: #ffffff;
  `,
  "white": css`
    background-color: #f5f5f5;
    color: #323232;
  `,
  "red": css`
    background-color: #D41E1E;
    color: #ffffff;
  `,
  "blue": css`
    background-color: #008CBA;
    color: #ffffff;
  `,
  "green": css`
    background-color: #4CAF50;
    color: #ffffff;
  `,
  "gray": css`
    background-color: #6b6e70;
    color: #ffffff;
  `,
  "yellow": css`
    background-color: #ffbd03;
    color: #ffffff;
  `,
};

interface ToolTipStyleProps {
  decor?: 'dark' | 'white' | 'red' | 'yellow' | 'blue' | 'green' | 'gray';
  open: boolean;
  moveposition: {
    x: string,
    y: string,
  };
}

export const ToolTipBase = styled.div`
  position: relative;
`;

export const ToolTipContent = styled.pre<ToolTipStyleProps>`
  position: absolute;
  width: 300px;
  border-radius: 5px;
  padding: 5px;
  top: 0;
  left: 0;
  transform: ${props => props.moveposition && `translateX(${props.moveposition.x}) translateY(${props.moveposition.y})` };
  font-size: .9rem;
  white-space: pre-line;
  line-height: 1.1rem;
  -webkit-user-select: none;
  user-select: none;
  display: ${props => props.open ? 'block' : 'none'};
  ${props => props.decor && bgColor[props.decor || 'dark']}
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: calc(100% - 1px);
    transform: translateX(-50%);
    border: 15px solid;
    border-color: #D41E1E #D41E1E00 #D41E1E00 #D41E1E00;
  }
`;